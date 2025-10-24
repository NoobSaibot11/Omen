import { iconNames } from '../../utils/IconMap';

export type Reminder = {
  title: string;
  date: string | 'daily';
  time: string;
  icon: iconNames;
  id: number;
};
