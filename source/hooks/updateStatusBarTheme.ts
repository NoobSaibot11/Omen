import { StatusBar } from 'react-native';

const updateStatusBarTheme = (mode: 'light' | 'dark') => {
  StatusBar.setBarStyle(mode === 'dark' ? 'light-content' : 'dark-content');
};

export default updateStatusBarTheme;
