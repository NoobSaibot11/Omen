import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import updateStatusBarTheme from '../../hooks/updateStatusBarTheme';
import WarningIcon from '../../assets/warning_icon.png';

const SupportNotAvailable = () => {
  const { bottom, top } = useSafeAreaInsets();
  updateStatusBarTheme('dark');

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View
        style={{
          marginTop: top,
          marginBottom: bottom,
          backgroundColor: '#ff8d28',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}
      >
        <Image
          source={WarningIcon}
          style={{ height: 100, width: 100, marginBottom: 60 }}
        />
        <Text style={{ color: 'white', fontSize: 32, textAlign: 'center' }}>
          This app is not available on IOS
        </Text>
      </View>
    </View>
  );
};

export default SupportNotAvailable;
