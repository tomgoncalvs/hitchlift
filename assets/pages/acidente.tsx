import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import {
  Container,
  MapContainer,
  IconImage,
  TitleText,
  AttentionText,
  EmergencyButton,
  EmergencyButtonText,
} from '../styles/acidente.style'; // Importe os estilos

const AccidentGravePage = () => {
  // Função para discar para o número de emergência (190)
  const callEmergency = () => {
    Linking.openURL('tel:190');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      callEmergency();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Container>
      <MapContainer>
        {/* Aqui você pode adicionar um componente de mapa para mostrar a localização em tempo real */}
        {/* Exemplo: <MapView ... /> */}
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
