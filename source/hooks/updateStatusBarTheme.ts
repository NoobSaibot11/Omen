import { StatusBar } from 'react-native';

const updateStatusBarTheme = (
  mode: 'light' | 'dark',
  backgroundColor?: string,
) => {
  StatusBar.setBarStyle(mode === 'dark' ? 'light-content' : 'dark-content');
  StatusBar.setBackgroundColor(
    backgroundColor ? backgroundColor : mode === 'dark' ? '#000000' : '#FFFFFF',
  );
};

export default updateStatusBarTheme;
