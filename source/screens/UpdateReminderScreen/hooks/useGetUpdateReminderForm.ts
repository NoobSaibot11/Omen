import { useForm } from '@tanstack/react-form';
import { useReminderContext } from '../../../contexts/ReminderContext';
import { Reminder } from '../../../contexts/ReminderContext/types';
import { ReminderFormType } from '../../AddReminderScreen/hooks/types';

const useGetUpdateReminderForm = (currentReminder: Reminder) => {
  const { updateReminder } = useReminderContext();

  const onSubmit = (value: ReminderFormType) => {
    const newReminder: Reminder = {
      id: currentReminder.id,
      title: value.title,
      date: value.date,
      time: value.time,
      icon: value.icon,
    };

    updateReminder(newReminder);
  };

  const form = useForm({
    defaultValues: currentReminder,
    onSubmit: async ({ value }: { value: ReminderFormType }) => {
      onSubmit(value);
    },
  });

  return form;
};

export default useGetUpdateReminderForm;
