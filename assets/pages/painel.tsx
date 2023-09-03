import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  PainelPage: { nomeCliente: string };
};

type PainelPageRouteProp = RouteProp<RootStackParamList, 'PainelPage'>;
type PainelPageNavigationProp = StackNavigationProp<RootStackParamList, 'PainelPage'>;

type Props = {
  route: PainelPageRouteProp;
  navigation: PainelPageNavigationProp;
};

const PainelPage: React.FC<Props> = ({ route }) => {
  const { nomeCliente } = route.params;

  return (
    <View>
      <Text>Bem-vindo ao Painel, {nomeCliente}!</Text>
      {/* Resto do conteúdo da página */}
    </View>
  );
};

export default PainelPage;
