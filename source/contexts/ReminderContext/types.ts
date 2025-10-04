import { ImageSourcePropType } from 'react-native';

export type Reminder = {
  title: string;
  date: string | 'daily';
  time: string;
  icon: ImageSourcePropType;
  id: number;
};
