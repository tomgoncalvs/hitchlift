import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const GreetingText = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const DescriptionText = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
`;

/* Busca */

export const SearchContainer = styled.View`
  position: relative;
`;

export const SearchBar = styled.TextInput`
  background-color: #eaf1f6;
  border-radius: 8px;
  padding: 15px;
  font-size: 12px;
  color: #72a8d0;
  padding-right: 40px; 
`;

export const SearchIcon = styled.Image`
  position: absolute;
  top: 50%;
  right: 10px;
  margin-top: -9px; 
  width: 18px;
  height: 18px;
  tint-color: #007BFF;
`;

/* Veiculo */

export const VehicleImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const VehicleImage = styled.Image`
  flex: 1; /* A imagem ocupa toda a largura do container */
  height: 125px
  border-radius: 8px;
`;

export const VehicleInfoContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6); /* Fundo escuro semi-transparente */
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const VehicleText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const VehicleYear = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: bold;
`;

// Estilos para a seção "Seus Veículos"
export const VehicleSection = styled.View`
  margin-top: 20px;
`;

export const VehicleTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const VehicleItem = styled.View`
  margin-top: 10px;
  position: relative;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.2); 
  padding: 5px 10px; /* Altura de 23px */
  border-radius: 8px;
  margin-top: 10px;
  align-self: flex-end; 
`;

export const ButtonText = styled.Text`
  color: #fff; 
  font-size: 11px;
`;

/* Problemas */

export const ProblemSection = styled.View`
  margin-top: 20px;
`;

export const ProblemHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProblemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const VerMaisText = styled.Text`
  font-size: 12px;
  color: #0270C7;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  border-radius: 8px;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between; 
`;

export const IconImage = styled.Image`
  width: 58px;
  height: 58px;
  border: 10px solid #BFDAEE;
  background-color: #BFDAEE;
  border-radius: 15px;
  margin-horizontal: 10px;
`;

export const ProblemText = styled.Text`
  font-size: 12px;
  text-align: center;
`;

export const NearYouSection = styled.View`
  margin-top: 20px;
`;

export const NearYouHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NearYouTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const VerMaisNearYou = styled.Text`
  font-size: 12px;
  color: #0270C7;
`;

export const GalleryContainer = styled.ScrollView`
  margin-top: 20px;
`;

export const ServiceProvider = styled.View`
  width: 200px;
  height: 270px;
  border-radius: 10px;
  margin-right: 20px;
  overflow: hidden;
  
`;

export const ServiceBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ServiceInfo = styled.View`
  position: absolute;
  bottom: 237px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 5px;
  border-radius: 5px;
  width: 105px;
  height: 23px;
  text-align: center;
`;

export const InfoText = styled.Text`
  font-size: 12px;
`;

export const ServiceTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  color: #fff;
`;

export const StarRating = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const StarIcon = styled.View`
  width: 16px;
  height: 16px;
  background-color: #FFCE15;
  border-radius: 50%;
  margin-right: 5px;
`;

export const RatingText = styled.Text`
  font-size: 14px;
  color: #FFCE15;
`;

export const PrototypeSection = styled.View`
  margin-top: 20px;
`;

export const PrototypeText = styled.Text`
  font-size: 16px;
  color: #555;
  text-align: center;
`;