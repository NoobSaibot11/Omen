import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  RootNavigatorParams,
  RootStackScreenProps,
} from '../RootNavigator/types';

export type AuthStackParamList = {
  SplashScreen: undefined;
  SupportNotAvailable: undefined;
  LandingScreen: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthStackParamList, T>,
    RootStackScreenProps<keyof RootNavigatorParams>
  >;
