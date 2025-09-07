import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BaseScreenProps } from './types';
import styles from './styles';
import updateStatusBarTheme from '../../hooks/updateStatusBarTheme';

const BaseScreen = ({ children, theme, backgroundColor }: BaseScreenProps) => {
  const { bottom, top } = useSafeAreaInsets();
  updateStatusBarTheme(
    theme,
    backgroundColor || (theme === 'light' ? '#FFFFFF' : '#000000'),
  );

  return (
    <View style={styles.ParentWrapper}>
      <View
        style={[
          styles.ChildWrapper,
          backgroundColor
            ? { backgroundColor }
            : theme !== 'light'
            ? styles.LightTheme
            : styles.DarkTheme,
          {
            paddingTop: top,
          },
        ]}
      >
        {children}
      </View>

      {/* Navigation tab container */}
      <View
        style={[
          styles.NavigationTabWrapper,
          {
            height: bottom,
          },
        ]}
      />
    </View>
  );
};

export default BaseScreen;
