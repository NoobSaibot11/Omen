import React from 'react';
import { View } from 'react-native';

import styles from '../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import OmenAnimationJson from '../assets/omen_lottie_animation.json';

const OmenAnimation = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.AnimationWrapper, { marginTop: 110 - top }]}>
      <LottieView
        source={OmenAnimationJson}
        style={styles.ImageProps}
        autoPlay
      />
    </View>
  );
};

export default OmenAnimation;
