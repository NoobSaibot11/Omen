import { useContext } from 'react';
import { ReminderContext } from './ReminderContext';

export const useReminderContext = () => useContext(ReminderContext);
