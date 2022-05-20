import React from 'react';
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

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular
  });

  if(!fontsLoaded){
    return (
      <SplashScreen/>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
