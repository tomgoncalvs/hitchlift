import React from "react";
import { Text, Image, FlatList, View, TouchableOpacity  } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import FloatingMenu from "../../components/Menu/MenuFlutuante";
import {
  Container,
  Header,
  GreetingText,
  DescriptionText,
  SearchContainer,
  SearchBar,
  SearchIcon,
  VehicleSection,
  VehicleTitle,
  VehicleItem,
  VehicleImage,
  VehicleText,
  VehicleYear,
  VehicleInfoContainer,
  VehicleImageContainer,
  ButtonContainer,
  ButtonText,
  ProblemSection,
  ProblemTitle,
  VerMaisText,
  IconContainer,
  IconImage,
  ProblemText,
  ProblemHeader,
  NearYouHeader,
  NearYouSection,
  NearYouTitle,
  VerMaisNearYou,
  GalleryContainer,
  InfoText,
  RatingText,
  ServiceInfo,
  ServiceProvider,
  ServiceTitle,
  StarIcon,
  StarRating,
  ServiceBackground,
  PrototypeSection,
  PrototypeText,
} from "../styles/painel.style";

const problemData = [
  {
    id: '1',
    icon: require('../images/icons/tow-truck.svg'),
    text: 'Guincho',
  },
  {
    id: '2',
    icon: require('../images/icons/mecanico.svg'),
    text: 'Mecânico',
  },
  {
    id: '3',
    icon: require('../images/icons/bateria.svg'),
    text: 'Bateria',
  },
  {
    id: '4',
    icon: require('../images/icons/chaveiro.svg'),
    text: 'Chaveiro',
  },
];

const serviceProviderData = [
  {
    id: '1',
    background: require('../images/dafult-provider.png'), 
    distance: 'Distancia 48,2 KM',
    title: 'Guinchos Zupelli',
    rating: 5.0,
  },
  {
    id: '2',
    background: require('../images/dafult-provider.png'), 
    distance: 'Distancia 48,2 KM',
    title: 'Guinchos Zupelli',
    rating: 5.0,
  },
  {
    id: '1',
    background: require('../images/dafult-provider.png'), 
    distance: 'Distancia 48,2 KM',
    title: 'Guinchos Zupelli',
    rating: 5.0,
  },

];

type RootStackParamList = {
  PainelPage: { nomeCliente: string };
};

type PainelPageRouteProp = RouteProp<RootStackParamList, "PainelPage">;
type PainelPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  "PainelPage"
>;

type Props = {
  route: PainelPageRouteProp;
  navigation: PainelPageNavigationProp;
};



const PainelPage: React.FC<Props> = ({ route, navigation }) => {
  const { nomeCliente } = route.params;

  const navigateToChamadosPage = (problema: string) => {
    navigation.navigate("ChamadosPage", { nomeCliente, problema });
  };

  return (
    <Container>
      <Header>
        <GreetingText>Olá, {nomeCliente}!</GreetingText>
      </Header>
      <DescriptionText>Como podemos ajudar hoje?</DescriptionText>
      <SearchContainer>
        <SearchBar placeholder="Procurar..." />
        <SearchIcon
          source={require("../images/icons/search_icon.svg")} // Substitua pelo caminho correto do ícone SVG
        />
      </SearchContainer>

      <VehicleSection>
        <VehicleTitle>Seus Veículos</VehicleTitle>
        <VehicleItem>
          <VehicleImageContainer>
            <VehicleImage
              source={require('../images/default_truck.png')} // Substitua pelo caminho correto da imagem
            />
            <VehicleInfoContainer>
              <VehicleText>Mercedes Actros 2653</VehicleText>
              <VehicleYear>2019</VehicleYear>
              <ButtonContainer>
                <ButtonText>Ficha Técnica</ButtonText>
              </ButtonContainer>
            </VehicleInfoContainer>
          </VehicleImageContainer>
        </VehicleItem>
        {/* Adicione mais veículos conforme necessário */}
      </VehicleSection>

      <ProblemSection>
        <ProblemHeader>
          <ProblemTitle>Qual o problema?</ProblemTitle>
          <VerMaisText>Ver mais</VerMaisText>
        </ProblemHeader>
        <IconContainer>
          {problemData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigateToChamadosPage(item.text)} // Aqui estamos passando o texto do problema para a função de navegação
            >
              <View>
                <IconImage source={item.icon} />
                <ProblemText>{item.text}</ProblemText>
              </View>
            </TouchableOpacity>
          ))}
        </IconContainer>
      </ProblemSection>

      <NearYouSection>
        <NearYouHeader>
          <NearYouTitle>Perto de Você</NearYouTitle>
          <VerMaisNearYou>Ver mais</VerMaisNearYou>
        </NearYouHeader>
        <GalleryContainer horizontal={true}>
          {serviceProviderData.map((provider) => (
            <ServiceProvider key={provider.id}>
              <ServiceBackground source={provider.background}>
                <ServiceInfo>
                  <InfoText>{provider.distance}</InfoText>
                  <ServiceTitle>{provider.title}</ServiceTitle>
                  <StarRating>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} />
                    ))}
                    <RatingText>{provider.rating.toFixed(1)}</RatingText>
                  </StarRating>
                </ServiceInfo>
              </ServiceBackground>
            </ServiceProvider>
          ))}
        </GalleryContainer>
      </NearYouSection>
      
      <PrototypeSection>
        <PrototypeText>Este é um protótipo desenvolvido pelo grupo TPC - 1tdspx</PrototypeText>
      </PrototypeSection>
      <FloatingMenu />
    </Container>
  );
};

export default PainelPage;
