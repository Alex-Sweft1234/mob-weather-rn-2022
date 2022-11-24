import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCREENS } from '../types';

export const HeaderRoot: React.FC = (): JSX.Element => {
  const navigation = useNavigation<any>();

  const onSettings = () => {
    navigation.navigate(SCREENS.SETTINGS);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxText}>
        <Icon name="partly-sunny" color="#ffffff" size={24} />
        <Text style={styles.textRoot}>Weather</Text>
      </View>
      <TouchableOpacity onPress={onSettings}>
        <Icon name="settings" color="#ffffff" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export const HeaderSettings: React.FC = (): JSX.Element => {
  const navigation = useNavigation<any>();

  const onSettings = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSettings}>
        <Icon name="arrow-back" color="#ffffff" size={24} />
      </TouchableOpacity>
      <View style={styles.boxText}>
        <Text style={styles.textSettings}>{SCREENS.SETTINGS}</Text>
        <Icon name="settings" color="#ffffff" size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#192f6a',
    height: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textRoot: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textSettings: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginRight: 10,
  },
  boxText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
