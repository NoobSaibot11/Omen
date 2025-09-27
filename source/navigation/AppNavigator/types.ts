import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  RootNavigatorParams,
  RootStackScreenProps,
} from '../RootNavigator/types';

export type AppStackParamList = {
  RemindersScreen: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AppStackParamList, T>,
    RootStackScreenProps<keyof RootNavigatorParams>
  >;
