import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParams = {
  Home: undefined;
  SplashScreen: undefined;
  SupportNotAvailable: undefined;
};

export type AppStackScreenProps = NativeStackScreenProps<AppStackParams>;
