import React from 'react';
import { HomeScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../theme';
import { HeaderRoot, HeaderSettings } from './header';
import { SCREENS } from '../types';
import { SettingsScreen } from '../screens/settings';

const Stack = createNativeStackNavigator();

export const NavigationRoot: React.FC = (): JSX.Element => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ header: HeaderRoot }}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREENS.SETTINGS} options={{ header: HeaderSettings }} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
