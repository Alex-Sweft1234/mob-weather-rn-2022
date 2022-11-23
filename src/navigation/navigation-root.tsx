import React from 'react';
import { HomeScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../theme';
import { Header } from './header';

const Stack = createNativeStackNavigator();

export const NavigationRoot: React.FC = (): JSX.Element => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={Header}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
