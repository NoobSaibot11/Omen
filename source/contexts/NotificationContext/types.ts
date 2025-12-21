import { Reminder } from '../ReminderContext/types';

// Define the shape of what the context provides
export interface NotificationContextType {
  scheduleReminder: (reminder: Reminder) => void;
  cancelReminder: (id: number) => void;
  updateReminder: (reminder: Reminder) => void;
  createDefaultChannel: () => void;
}
