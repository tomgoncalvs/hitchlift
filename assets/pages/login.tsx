// LoginPage.js
import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Logo,
  Form,
  Input,
  ForgotPassword,
  LoginButton,
  LoginButtonText,
  GoogleButton,
  GoogleIcon,
  GoogleButtonText,
  Label,
} from "../styles/login.style";
import Icon from "react-native-vector-icons/FontAwesome";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const serverUrl = 'http://localhost:3000';
      console.log('Enviando informações de login:', { username, password });

      const response = await axios.post(`${serverUrl}/authenticate`, {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        console.log('Login bem-sucedido');
      } else {
        console.log('Login falhou');
      }
    } catch (error) {
      console.error('Erro de autenticação:', error);
    }
  };

  return (
    <Container>
      <Logo source={require("../images/porto-logo-1.png")} />

      <Form>
        <Label>Identificação</Label>

        <Input
          placeholder="Nome de usuário"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <Label>Senha</Label>
        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <ForgotPassword>Esqueceu sua senha?</ForgotPassword>

        <LoginButton onPress={handleLogin}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>

        <GoogleButton>
          <Icon name="google" size={20} color="#009EE2" />
          <GoogleButtonText>Entrar com Google</GoogleButtonText>
        </GoogleButton>
      </Form>
    </Container>
  );
};

export default LoginPage;
