import { createContext, ReactNode, useEffect } from 'react';
import notificationService from '../../services/NotificationService/NotificationService';
import { NotificationContextType } from './types';

// Create the context
export const NotificationContext = createContext<NotificationContextType>({
  scheduleReminder: () => Promise.resolve(),
  cancelReminder: () => Promise.resolve(),
  updateReminder: () => Promise.resolve(),
  createDefaultChannel: () => Promise.resolve(),
});

// Provider component
export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Create notification channel once app starts
    notificationService.createDefaultChannel();
  }, []);

  const value: NotificationContextType = {
    scheduleReminder: reminder =>
      notificationService.scheduleReminder(reminder),
    cancelReminder: id => notificationService.cancelReminder(id),
    updateReminder: reminder => notificationService.updateReminder(reminder),
    createDefaultChannel: () => notificationService.createDefaultChannel(),
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
