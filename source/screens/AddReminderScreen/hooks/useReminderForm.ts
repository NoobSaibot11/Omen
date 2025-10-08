import { useForm } from '@tanstack/react-form';
import PlaceholderIcon from '../../../assets/icons/placeholder.png';
import { useReminderContext } from '../../../contexts/ReminderContext';
import { ReminderFormType } from './types';
import { Reminder } from '../../../contexts/ReminderContext/types';

const defaultValues: ReminderFormType = {
  title: '',
  icon: PlaceholderIcon,
  time: '',
  date: '',
};

export const useReminderForm = () => {
  const { addReminder } = useReminderContext();

  const onSubmit = (value: ReminderFormType) => {
    const id = new Date().getTime();
    const newReminder: Reminder = {
      id: id,
      title: value.title,
      date: value.date,
      time: value.time,
      icon: value.icon,
    };

    addReminder(newReminder);
  };

  const form = useForm({
    defaultValues: defaultValues,
    onSubmit: async ({ value }: { value: ReminderFormType }) => {
      onSubmit(value);
    },
  });

  return form;
};
