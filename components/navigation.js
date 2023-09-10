import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../assets/pages/login';
import PainelPage from '../assets/pages/painel'; 
import ChamadosPage from '../assets/pages/chamados';
import AccidentGravePage from '../assets/pages/acidente';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="PainelPage" component={PainelPage} />
        <Stack.Screen name="ChamadosPage" component={ChamadosPage} />
        <Stack.Screen name="AccidentGravePage" component={AccidentGravePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
