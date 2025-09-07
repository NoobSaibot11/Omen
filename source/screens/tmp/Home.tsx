import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { HomeProps } from './types';
import { BaseScreen } from '../../components';

const Home = ({ navigation }: HomeProps) => {
  return (
    <BaseScreen theme="dark">
      <View style={styles.HomeWrapper}>
        <Text style={styles.HomeText}>Home</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('Hello');
            navigation.navigate('AuthStack', { screen: 'SplashScreen' });
          }}
        >
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
    </BaseScreen>
  );
};

export default Home;
