import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Home from './src/screens/Home';
import Detalhes from './src/screens/Detalhes';
import Routes from './src/routes';
import {AuthProvider} from './src/hooks/auth';
import SplashScreen from './src/screens/SplashScreen';
import { FavoriteProvider } from './src/hooks/favorite';

export default function App() {

  const [teste, setTeste] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular
  });

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
      <AuthProvider>
        <FavoriteProvider>
          <Routes />
        </FavoriteProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
