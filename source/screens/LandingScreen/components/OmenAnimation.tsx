import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import Omen1 from '../assets/Omen_1.png';
import Omen2 from '../assets/Omen_2.png';
import Omen3 from '../assets/Omen_3.png';
import Omen4 from '../assets/Omen_4.png';
import Omen5 from '../assets/Omen_5.png';
import styles from '../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const OmenAnimation = () => {
  const { top } = useSafeAreaInsets();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [forward, setForward] = useState<boolean>(true);

  const images = [Omen1, Omen2, Omen3, Omen4, Omen5];

  const handlePress = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    images.forEach((_, idx) => {
      setTimeout(() => {
        setCurrentIndex(forward ? idx : images.length - 1 - idx);
        if (idx === images.length - 1) {
          setForward(!forward);
          setIsAnimating(false);
        }
      }, idx * 150);
    });
  };

  return (
    <View style={[styles.AnimationWrapper, { marginTop: 110 - top }]}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={images[currentIndex]} style={styles.ImageProps} />
      </TouchableOpacity>
    </View>
  );
};

export default OmenAnimation;
