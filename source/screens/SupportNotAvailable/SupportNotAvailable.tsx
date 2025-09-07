import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import updateStatusBarTheme from '../../hooks/updateStatusBarTheme';
import WarningIcon from '../../assets/warning_icon.png';
import styles from './styles';

const SupportNotAvailable = () => {
  const { bottom, top } = useSafeAreaInsets();
  updateStatusBarTheme('dark', '#ff8d28');

  return (
    <View style={styles.ParentWrapper}>
      <View
        style={[
          styles.ChildWrapper,
          {
            marginTop: top,
            marginBottom: bottom,
          },
        ]}
      >
        <Image source={WarningIcon} style={styles.ImageWrapper} />
        <Text style={styles.TextWrapper}>This app is not available on IOS</Text>
      </View>
    </View>
  );
};

export default SupportNotAvailable;
