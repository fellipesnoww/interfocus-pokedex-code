import React, { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';


import Routes from './src/routes';

import SplashScreen from './src/screens/SplashScreen';
import CombineProviders from './src/hooks/combineProviders';

export default function App() {

  
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular
  });
  
  const [teste, setTeste] = useState(false);
  
  function alteraState(){
    setTimeout(() => {
      setTeste(true)
    }, 7000);
  }

  useEffect(() => {
    alteraState()
  }, [])

  if(!fontsLoaded || !teste){
    return (
      <SplashScreen/>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CombineProviders>
          <Routes />
      </CombineProviders>      
    </ThemeProvider>
  );
}
