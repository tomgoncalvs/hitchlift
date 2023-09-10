// styles.js
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color:#FCFCFC;
`;

export const WelcomeText = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const LogoutButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Menu = styled.View`
  width: 100%;
  align-items: center;
`;

export const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 80%;
  padding: 25px 15px;
  background-color: white;
  border-radius: 10px;
  margin-vertical: 10px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 20px;
  elevation: 2;
  
`;

export const IconContainer = styled.View`
  margin-right: 10px;
`;

export const ButtonTextContainer = styled.View`
  flex: 1;
`;

export const ButtonText = styled.Text`
  color: Black;
  font-weight: bold;
  font-size: 18px;
`;

export const ButtonDescription = styled.Text`
  color: #0270C7;
  font-size: 14px;
`;
