import React from 'react';
import { Text, Image } from 'react-native'; // Importe o Image
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import FloatingMenu from '../../components/Menu/MenuFlutuante'; // Importe o componente do menu flutuante
import {
  Container,
  Menu,
  MenuButton,
  IconContainer,
  ButtonTextContainer,
  ButtonText,
  ButtonDescription,
} from '../styles/chamados.style'; // Importe os estilos

type RootStackParamList = {
  ChamadosPage: { nomeCliente: string };
};

type ChamadosPageRouteProp = RouteProp<RootStackParamList, 'ChamadosPage'>;
type ChamadosPageNavigationProp = StackNavigationProp<RootStackParamList, 'ChamadosPage'>;

type Props = {
  route: ChamadosPageRouteProp;
  navigation: ChamadosPageNavigationProp;
};

const menuItems = [
  {
    icon: require('../images/icons/accident.svg'), // Altere o caminho para o ícone
    name: 'Acidente de Trânsito',
    description: 'Me envolvi em um acidente e preciso de ajuda com meu veiculo.',
  },
  {
    icon: require('../images/icons/car-accident.svg'), // Altere o caminho para o ícone
    name: 'Acidente de Trânsito Grave',
    description: 'Me envolvi em um acidente e preciso de ajuda socorro para mim e meu veiculo.',
  },
  {
    icon: require('../images/icons/chase.svg'), // Altere o caminho para o ícone
    name: 'Estou sendo Perseguido',
    description: 'Estou sendo perseguido em trânsito por indivíduos suspeitos.',
  },
  {
    icon: require('../images/icons/tow-truck.svg'), // Altere o caminho para o ícone
    name: 'Preciso de um Guincho',
    description: 'Enviaremos um prestador para fazer a remoção do seu veículo.',
  },
];

const renderTextWithRedGrave = (text: string) => {
  const parts = text.split(' ');
  const renderedParts = parts.map((part, index) =>
    part.toLowerCase() === 'grave' ? (
      <Text key={index} style={{ color: 'red' }}>
        {part}
      </Text>
    ) : (
      <Text key={index}>{part} </Text> // Adicione um espaço após cada palavra
    )
  );
  return <>{renderedParts}</>;
};

const ChamadosPage: React.FC<Props> = ({ route, navigation }) => {
  const { nomeCliente } = route.params;

  const handleMenuItemPress = (menuItem: string) => {
    // Adicione a lógica para lidar com o clique em cada botão do menu
  };

  return (
    <Container>
      <Text>Bem-vindo ao Painel, {nomeCliente}!</Text>
      <Menu>
        {menuItems.map((item, index) => (
          <MenuButton
            key={index}
            onPress={() => handleMenuItemPress(item.name)}
            style={
              item.name.toLowerCase().includes('grave')
                ? { backgroundColor: 'white' }
                : null
            }
          >
            <IconContainer>
              <Image source={item.icon} style={{ width: 40, height: 40 }} />
            </IconContainer>
            <ButtonTextContainer>
              <ButtonText>
                {renderTextWithRedGrave(item.name)}
              </ButtonText>
              <ButtonDescription>{item.description}</ButtonDescription>
            </ButtonTextContainer>
          </MenuButton>
        ))}
      </Menu>
      <FloatingMenu />
    </Container>
  );
};

export default ChamadosPage;