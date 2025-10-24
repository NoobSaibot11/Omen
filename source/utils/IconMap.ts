import { ImageSourcePropType } from 'react-native';

import CarIcon from '../assets/icons/car.png';
import ClockIcon from '../assets/icons/clock.png';
import FoodIcon from '../assets/icons/food.png';
import HomeIcon from '../assets/icons/home.png';
import CustomIcon1 from '../assets/icons/icon1.png';
import CustomIcon2 from '../assets/icons/icon2.png';
import CustomIcon3 from '../assets/icons/icon3.png';
import MassageIcon from '../assets/icons/massage.png';
import NoMobileIcon from '../assets/icons/no_mobile.png';
import PhoneIcon from '../assets/icons/phone.png';
import SleepIcon from '../assets/icons/sleep.png';
import PlaceholderIcon from '../assets/icons/placeholder.png';

export enum iconNames {
  'car',
  'clock',
  'food',
  'home',
  'c1',
  'c2',
  'c3',
  'massage',
  'noMobile',
  'phone',
  'sleep',
  'placeholder',
}

export const Icons: Record<iconNames, ImageSourcePropType> = {
  [iconNames.car]: CarIcon,
  [iconNames.clock]: ClockIcon,
  [iconNames.food]: FoodIcon,
  [iconNames.home]: HomeIcon,
  [iconNames.c1]: CustomIcon1,
  [iconNames.c2]: CustomIcon2,
  [iconNames.c3]: CustomIcon3,
  [iconNames.massage]: MassageIcon,
  [iconNames.noMobile]: NoMobileIcon,
  [iconNames.phone]: PhoneIcon,
  [iconNames.sleep]: SleepIcon,
  [iconNames.placeholder]: PlaceholderIcon,
};

export const IconMap = (icon: iconNames): ImageSourcePropType => {
  return Icons[icon];
};
