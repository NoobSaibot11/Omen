import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BaseScreen } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { LandingScreenProps } from './types';

const LandingScreen = ({ navigation }: LandingScreenProps) => {
  return (
    <BaseScreen theme="dark" backgroundColor="#4B117F">
      <LinearGradient
        colors={['#4B117F', '#290a4e', '#040112']}
        style={{ flex: 1 }}
      >
        <Text style={{ color: 'white' }}>Landing</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('Hello');
            navigation.navigate('AppStack', { screen: 'Home' });
          }}
        >
          <Text>Done</Text>
        </TouchableOpacity>
      </LinearGradient>
    </BaseScreen>
  );
};

export default LandingScreen;
