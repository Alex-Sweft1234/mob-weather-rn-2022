import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ILayout } from '../../types';

export const Layout: React.FC<ILayout> = ({ children }): JSX.Element => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#034f84" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92a8d1',
  },
});
