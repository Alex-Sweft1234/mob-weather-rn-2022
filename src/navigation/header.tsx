import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Icon name="partly-sunny" color="#ffffff" size={24} />
      <Text style={styles.text}>Weather</Text>
    </View>
  );
};

export const Header = { header: CustomHeader };

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#192f6a',
    height: 70,
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 3,
    marginLeft: 10,
  },
});
