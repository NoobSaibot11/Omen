import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  RootNavigatorParams,
  RootStackScreenProps,
} from '../RootNavigator/types';
import { Reminder } from '../../contexts/ReminderContext/types';

export type CRUDStackParamList = {
  AddReminderScreen: undefined;
  UpdateReminderScreen: { selectedReminder: Reminder };
};

export type CRUDStackScreenProps<T extends keyof CRUDStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<CRUDStackParamList, T>,
    RootStackScreenProps<keyof RootNavigatorParams>
  >;
