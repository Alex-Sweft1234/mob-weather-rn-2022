import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomHeader: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={() => console.log('click')}>
        <Text style={styles.text}>Weather</Text>
      </TouchableOpacity>
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
    backgroundColor: '#034f84',
    height: 70,
  },
  touch: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
