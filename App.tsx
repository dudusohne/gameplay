import React from 'react';

import AppLoading from 'expo-app-loading';
import { Background } from './src/components/Background';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { StatusBar } from 'react-native';
import { AuthContext } from './src/hooks/auth';

import { Routes } from './src/routes';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContext.Provider value={{
        name: 'Rodrigo',
        email: 'rodrigo@email.com',
        avatar: 'rodrigo.png',
      }}>
        <Routes />
      </AuthContext.Provider>
    </Background>

  );
}