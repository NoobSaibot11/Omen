import { Reminder } from './types';
import HairOilIcon from '../../../assets/icons/massage.png';
import NoMobileIcon from '../../../assets/icons/no_mobile.png';
import SleepIcon from '../../../assets/icons/sleep.png';

const useGetReminders = (): Reminder[] => {
  const reminders: Reminder[] = [
    {
      title: 'Apply hair oil and do massage',
      time: '10:15 PM',
      icon: HairOilIcon,
    },
    {
      title: 'Do not use mobile after 11.30 PM',
      time: '11:30 PM',
      icon: NoMobileIcon,
    },
    {
      title: 'Go to sleep',
      time: '12:00 AM',
      icon: SleepIcon,
    },
  ];

  return reminders;
};

export default useGetReminders;
