import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Layout } from '../components';

export const HomeScreen: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <View style={styles.containerLocation}>
        <TouchableOpacity>
          <View style={styles.location}>
            <Icon name="locate" color="#ffffff" size={24} />
            <Text style={styles.textLocation}>Shakhty</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerWeather}>
        <Icon name="partly-sunny" color="#ffffff" size={120} />
        <Text style={styles.weatherText}>partly cloudy</Text>
        <Text style={styles.temperature}>+ 8</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  containerLocation: {
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWeather: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  location: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  textLocation: {
    color: '#ffffff',
    fontSize: 20,
    marginLeft: 8,
  },
  weatherText: {
    color: '#ffffff',
    fontSize: 20,
  },
  temperature: {
    color: '#ffffff',
    fontSize: 40,
    marginTop: 20,
  },
});
