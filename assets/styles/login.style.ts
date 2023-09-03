// login.style.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 300px;
  height: 150px;
  resizeMode: contain;
`;

export const Form = styled.View`
  margin-top: 20px;
  width: 80%;
`;

export const Label = styled.Text `
    font-size: 16px;
    margin-bottom: 10px;
`

export const Input = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const ForgotPassword = styled.Text`
  text-align: right;
  margin-bottom: 10px;
  color: #009EE2;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #009EE2;
  padding: 20px;
  border-radius: 5px;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  color: white;
`;

export const GoogleButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  background-color: #fff; 
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const GoogleIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: #555; 
`;

export const GoogleButtonText = styled.Text`
  color: #555; 
`;

export const ErrorMessage = styled.Text`
  color: #ff0000;
  font-size: 16px;
  margin-top: 10px;
`;

export const SuccessMessage = styled.Text`
  color: #00ff00;
  font-size: 16px;
  margin-top: 10px;
`;
