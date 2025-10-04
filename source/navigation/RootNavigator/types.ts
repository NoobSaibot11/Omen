import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../AuthNavigator/types';
import { AppStackParamList } from '../AppNavigator/types';
import { CRUDStackParamList } from '../CRUDNavigator/types';

export type RootNavigatorParams = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  AppStack: NavigatorScreenParams<AppStackParamList>;
  CRUDStack: NavigatorScreenParams<CRUDStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootNavigatorParams> =
  NativeStackScreenProps<RootNavigatorParams, T>;
