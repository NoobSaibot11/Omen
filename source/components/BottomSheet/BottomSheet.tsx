import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
import CloseIcon from '../../assets/close_icon.png';
import { BottomSheetProps } from './types';
import styles from './styles';

const BottomSheet = ({
  isVisible,
  title,
  message,
  closeSheet,
}: BottomSheetProps) => {
  const translateY = useRef(new Animated.Value(300)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const [mounted, setMounted] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setMounted(true);

      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0.4,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 300,
          duration: 250,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => setMounted(false));
    }
  }, [backdropOpacity, isVisible, translateY]);

  if (!mounted) return null;

  return (
    <View style={[styles.ParentWrapper, StyleSheet.absoluteFill]}>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          styles.InnerParentWrapper,
          { opacity: backdropOpacity },
        ]}
      >
        <TouchableWithoutFeedback onPress={closeSheet}>
          <View style={styles.InnerParentWrapper2} />
        </TouchableWithoutFeedback>
      </Animated.View>

      <Animated.View
        style={[
          styles.SheetWrapper,
          styles.AnimatedSheetWrapper,
          { transform: [{ translateY }] },
        ]}
      >
        <View style={styles.SheetInnerWrapper}>
          <TouchableOpacity
            style={styles.CloseIconWrapper}
            onPress={closeSheet}
          >
            <Image source={CloseIcon} style={styles.CloseIconStyle} />
          </TouchableOpacity>

          <Text style={styles.TitleTextStyle}>{title}</Text>
          <Text style={styles.MessageTextStyle}>{message}</Text>
        </View>

        <TouchableOpacity onPress={closeSheet} style={styles.CloseButtonStyle}>
          <Text style={styles.CloseTextStyle}>Close</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default BottomSheet;
