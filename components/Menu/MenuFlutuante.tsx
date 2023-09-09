import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, MenuItem } from './MenuFlutuante.style';

const FloatingMenu = () => {
  return (
    <Container>
      <MenuItem>
        <Icon name="home" size={30} color="#BFDAEE" />
      </MenuItem>
      <MenuItem>
        <Icon name="search" size={30} color="#BFDAEE" />
      </MenuItem>
      <MenuItem>
        <Icon name="bell" size={30} color="#BFDAEE" />
      </MenuItem>
      <MenuItem>
        <Icon name="cog" size={30} color="#BFDAEE" />
      </MenuItem>
    </Container>
  );
};

export default FloatingMenu;
