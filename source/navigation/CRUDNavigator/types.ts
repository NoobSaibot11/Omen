import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  RootNavigatorParams,
  RootStackScreenProps,
} from '../RootNavigator/types';

export type CRUDStackParamList = {
  AddReminderScreen: undefined;
};

export type CRUDStackScreenProps<T extends keyof CRUDStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<CRUDStackParamList, T>,
    RootStackScreenProps<keyof RootNavigatorParams>
  >;
