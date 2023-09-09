import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: center; /* Centraliza horizontalmente */
  background-color: white;
  padding: 20px 15px;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 2;
`;

export const MenuItem = styled.TouchableOpacity`
  margin-horizontal: 20px; /* Espaçamento igual entre os ícones */
`;
