import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeChamados from './src/paginas/HomeChamados';
import IncluirChamados from './src/paginas/IncluirChamados';
import ListarChamados from './src/paginas/ListarChamados';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeChamados">
        <Stack.Screen name="HomeChamados" component={HomeChamados} />
        <Stack.Screen name="IncluirChamados" component={IncluirChamados} />
        <Stack.Screen name="ListarChamados" component={ListarChamados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}