import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationRoot } from './navigation';

export const App: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationRoot />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({ container: { flex: 1 } });
