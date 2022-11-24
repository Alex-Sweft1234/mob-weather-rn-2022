import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layout } from '../components';

export const SettingsScreen: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <View style={styles.containerSettings}>
        <Text style={styles.text}>Settings screen</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  containerSettings: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
  },
});
