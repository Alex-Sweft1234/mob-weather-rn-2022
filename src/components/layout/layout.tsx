import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ILayout } from '../../types';

export const Layout: React.FC<ILayout> = ({ children }): JSX.Element => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <StatusBar backgroundColor="#192f6a" />
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({ container: { flex: 1 } });
