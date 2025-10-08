import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../AuthNavigator/types';
import { AppStackParamList } from '../AppNavigator/types';

export type RootNavigatorParams = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  AppStack: NavigatorScreenParams<AppStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootNavigatorParams> =
  NativeStackScreenProps<RootNavigatorParams, T>;
