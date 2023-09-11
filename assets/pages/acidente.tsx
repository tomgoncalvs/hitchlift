import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import Constants from 'expo-constants';
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';
import {
  Container,
  MapContainer,
  IconImage,
  TitleText,
  AttentionText,
  EmergencyButton,
  EmergencyButtonText,
} from '../styles/acidente.style'; // Importe os estilos
import MapComponent from '../../components/Map/MapComponent'; // Importe o componente do mapa
import { WebView } from 'react-native-webview';

// Função para discar para o número de emergência (190)
const callEmergency = () => {
  Linking.openURL('tel:190');
};

const AccidentGravePage = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  async function requestLocationPermissions() {
    if ('geolocation' in navigator) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        console.log('Posicao atual:', position.coords.latitude, position.coords.longitude);

        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      } catch (error) {
        console.error('Erro ao obter a localização:', error);
      }
    } else {
      console.error('Geolocalização não suportada neste navegador.');
    }
  }

  useEffect(() => {
    requestLocationPermissions();
    
    // Automatically trigger the "Emergency" call after 4 seconds
    setTimeout(callEmergency, 4000);
  }, []);

  return (
    <Container>
      <MapContainer>
        <IconImage source={require('../images/map.png')} style={{ width: 327, height: 345 }} />
      </MapContainer>
      <IconImage source={require('../images/icons/warning.svg')} style={{ width: 72, height: 72 }} />
      <TitleText>Atenção</TitleText>
      <AttentionText>
        A polícia recomenda que o cidadão não reaja a nenhum tipo de violência, já que você pode estar sendo até uma vítima de homicídio.
        Então, nessa situação que você for vítima de assalto, não reaja.
      </AttentionText>
      <EmergencyButton onPress={callEmergency}>
        <EmergencyButtonText>Ligando para a polícia</EmergencyButtonText>
      </EmergencyButton>
    </Container>
  );
};

export default AccidentGravePage;
