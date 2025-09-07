import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { BaseScreen } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { LandingScreenProps } from './types';

import styles from './styles';
import OmenAnimation from './components/OmenAnimation';

const LandingScreen = ({ navigation }: LandingScreenProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPressSignIn = () => {
    navigation.navigate('AppStack', { screen: 'Home' });
  };

  return (
    <BaseScreen theme="dark" backgroundColor="#4B117F">
      <LinearGradient
        colors={['#4B117F', '#290a4e', '#040112']}
        style={styles.AnimationGradientWrapper}
      >
        <ScrollView
          contentContainerStyle={styles.ScrollViewStyle}
          keyboardShouldPersistTaps="handled"
        >
          <OmenAnimation />

          <View style={styles.TextWrapper}>
            <Text style={styles.Texts}>Welcome</Text>
            <Text style={styles.Texts}>to Omen</Text>
          </View>

          <View style={styles.InputWrapper}>
            <LinearGradient
              colors={['#260848', '#1A083C']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.GradientStyle}
            >
              <TextInput
                placeholder="USERNAME"
                placeholderTextColor="#71409B"
                style={styles.TextInputStyle}
                value={username}
                onChangeText={setUsername}
              />
            </LinearGradient>
          </View>

          <View style={[styles.InputWrapper, styles.InputWrapper2]}>
            <LinearGradient
              colors={['#260848', '#1A083C']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.GradientStyle}
            >
              <TextInput
                placeholder="PASSWORD"
                placeholderTextColor="#71409B"
                style={styles.TextInputStyle}
                value={password}
                secureTextEntry
                onChangeText={setPassword}
              />
            </LinearGradient>
          </View>

          <View style={styles.LineStyle} />

          <TouchableOpacity
            onPress={onPressSignIn}
            style={styles.ButtonWrapper}
          >
            <View style={styles.ButtonBox}>
              <Text style={styles.ButtonText}>SIGN IN</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </BaseScreen>
  );
};

export default LandingScreen;
