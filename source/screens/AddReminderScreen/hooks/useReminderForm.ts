import { useForm } from '@tanstack/react-form';
import { useReminderContext } from '../../../contexts/ReminderContext';
import { ReminderFormType } from './types';
import { Reminder } from '../../../contexts/ReminderContext/types';
import { iconNames } from '../../../utils/IconMap';

const defaultValues: ReminderFormType = {
  title: '',
  icon: iconNames.placeholder,
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
