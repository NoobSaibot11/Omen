import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import updateStatusBarTheme from '../../hooks/updateStatusBarTheme';
import { HomeProps } from './types';

const Home = ({ navigation }: HomeProps) => {
  const { bottom, top } = useSafeAreaInsets();
  updateStatusBarTheme('light');

  return (
    <View
      style={[styles.HomeWrapper, { paddingTop: top, marginBottom: bottom }]}
    >
      <Text style={styles.HomeText}>Home</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('Hello');
          navigation.navigate('SplashScreen');
        }}
      >
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
