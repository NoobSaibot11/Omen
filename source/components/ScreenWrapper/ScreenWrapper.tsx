import React from 'react';
import { BaseScreen } from '../BaseScreen';
import { View } from 'react-native';
import { ScreenWrapperProps } from './types';
import styles from './styles';

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return (
    <BaseScreen theme="dark" backgroundColor="black">
      <View style={styles.ParentWrapper}>
        <View style={styles.ChildWrapper}>{children}</View>
      </View>
    </BaseScreen>
  );
};

export default ScreenWrapper;
