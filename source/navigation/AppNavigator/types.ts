import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  RootNavigatorParams,
  RootStackScreenProps,
} from '../RootNavigator/types';
import { CRUDStackParamList } from '../CRUDNavigator/types';

export type AppStackParamList = {
  RemindersScreen: undefined;
  ProfilePage: undefined;
  AboutScreen: undefined;
  CRUDStack: NavigatorScreenParams<CRUDStackParamList>;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AppStackParamList, T>,
    RootStackScreenProps<keyof RootNavigatorParams>
  >;
