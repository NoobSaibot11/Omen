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
import { useReminderContext } from '../../contexts/ReminderContext';

import HairOilIcon from '../../assets/icons/massage.png';
import NoMobileIcon from '../../assets/icons/no_mobile.png';
import SleepIcon from '../../assets/icons/sleep.png';
import { Reminder } from '../../contexts/ReminderContext/types';

const tmpReminders: Reminder[] = [
  {
    title: 'Apply hair oil and do massage',
    date: 'Daily',
    time: '10:15 PM',
    icon: HairOilIcon,
    id: 1,
  },
  {
    title: 'Do not use mobile after 11.30 PM',
    date: 'Jan 2',
    time: '11:30 PM',
    icon: NoMobileIcon,
    id: 2,
  },
  {
    title: 'Go to sleep',
    date: 'Sep 15',
    time: '12:00 AM',
    icon: SleepIcon,
    id: 3,
  },
];

const LandingScreen = ({ navigation }: LandingScreenProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useReminderContext();

  const onPressSignIn = () => {
    dispatch({ type: 'FETCH_REMIDNERS', payload: tmpReminders });
    navigation.navigate('AppStack', { screen: 'RemindersScreen' });
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
