import React from 'react';
import { Text, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import FloatingMenu from '../../components/Menu/MenuFlutuante';
import {
  Container,
  Menu,
  MenuButton,
  IconContainer,
  ButtonTextContainer,
  ButtonText,
  ButtonDescription,
  WelcomeText,
} from '../styles/chamados.style';

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
    destination: 'PainelPage', // Nome da rota de destino para este item
  },
  {
    icon: require('../images/icons/car-accident.svg'), // Altere o caminho para o ícone
    name: 'Acidente de Trânsito Grave',
    description: 'Me envolvi em um acidente e preciso de ajuda socorro para mim e meu veiculo.',
    destination: 'AccidentGravePage', // Nome da rota de destino para este item
  },
  {
    icon: require('../images/icons/chase.svg'), // Altere o caminho para o ícone
    name: 'Estou sendo Perseguido',
    description: 'Estou sendo perseguido em trânsito por indivíduos suspeitos.',
    destination: 'PerseguicaoPage', // Nome da rota de destino para este item
  },
  {
    icon: require('../images/icons/tow-truck.svg'), // Altere o caminho para o ícone
    name: 'Preciso de um Guincho',
    description: 'Enviaremos um prestador para fazer a remoção do seu veículo.',
    destination: 'GuinchoPage', // Nome da rota de destino para este item
  },
];

const ChamadosPage: React.FC<Props> = ({ route, navigation }) => {
  const { nomeCliente } = route.params;

  const handleMenuItemPress = (destination: string) => {
    // Executa a navegação com base na rota de destino do item do menu
    navigation.navigate(destination, { nomeCliente });
  };

  return (
    <Container>
      <WelcomeText>{nomeCliente}, para continuar com a solicitação, selecione uma das opções abaixo</WelcomeText>
      <Menu>
        {menuItems.map((item, index) => (
          <MenuButton
            key={index}
            onPress={() => handleMenuItemPress(item.destination)} // Navega para a rota de destino do item
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
              <ButtonText>{item.name}</ButtonText>
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
