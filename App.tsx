import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Container, Texto } from './styles';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Texto>OLA</Texto>
      </Container>
    </ThemeProvider>
  );
}
