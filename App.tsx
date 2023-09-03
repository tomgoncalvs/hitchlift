import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './assets/pages/login';
import React from 'react';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <LoginPage />
    </View>
    
  );
}


