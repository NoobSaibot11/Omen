import { iconNames } from '../../utils/IconMap';

export type Reminder = {
  title: string;
  time: string;
  date: string | 'daily';
  year: string;
  icon: iconNames;
  id: number;
};
