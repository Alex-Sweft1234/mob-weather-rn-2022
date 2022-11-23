import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Layout } from '../components';

export const HomeScreen: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Text style={styles.text}>Home screen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 20,
  },
});
