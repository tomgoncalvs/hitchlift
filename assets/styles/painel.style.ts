// styles.js
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
