import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import updateStatusBarTheme from '../hooks/updateStatusBarTheme';

const Home = () => {
  const { bottom, top } = useSafeAreaInsets();
  updateStatusBarTheme('light');

  return (
    <View
      style={[styles.HomeWrapper, { marginTop: top, marginBottom: bottom }]}
    >
      <Text style={styles.HomeText}>Home</Text>
      <TouchableOpacity onPress={() => console.log('Hello')}>
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
