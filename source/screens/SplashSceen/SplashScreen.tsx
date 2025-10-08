import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Image, Platform, View } from 'react-native';
import RNSplashScreen from 'react-native-splash-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SplashLogo from '../../assets/launch_screen.png';
import SplashAnimation from '../../assets/splash_2.png';

import updateStatusBarTheme from '../../hooks/updateStatusBarTheme';
import styles from './styles';
import { SplashScreenProps } from './types';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../../navigation/RootNavigator/types';

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  updateStatusBarTheme('dark');
  const { bottom } = useSafeAreaInsets();
  const { state } = useAuthContext();
  const { token, isLoading } = state;
  const appNavigator =
    useNavigation<RootStackScreenProps<'AuthStack'>['navigation']>();

  const isIOS = Platform.OS === 'ios';

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  const onAnimationEnd = useCallback(() => {
    if (isLoading) return;

    setTimeout(() => {
      if (isIOS) {
        navigation.navigate('SupportNotAvailable');
        return;
      }
      if (token) {
        appNavigator.reset({
          index: 0,
          routes: [{ name: 'AppStack', params: { screen: 'RemindersScreen' } }],
        });
        return;
      }

      navigation.reset({ index: 0, routes: [{ name: 'LandingScreen' }] });
    }, 800);
  }, [isLoading, isIOS, token, navigation, appNavigator]);

  useEffect(() => {
    setTimeout(() => {
      RNSplashScreen.hide();
    }, 500);
  }, []);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        delay: 500,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 40,
        useNativeDriver: true,
        delay: 500,
      }),
    ]).start(() => {
      onAnimationEnd();
    });
  }, [fadeAnim, scaleAnim, onAnimationEnd]);

  return (
    <View style={[styles.ParentWrapper, { paddingBottom: bottom }]}>
      <Image
        source={SplashLogo}
        style={[styles.SplashLogoImage, { top: bottom }]}
      />
      <View style={styles.SplashAnimationWrapper}>
        <Animated.Image
          source={SplashAnimation}
          style={[
            styles.SplashAnimation,
            { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
          ]}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
