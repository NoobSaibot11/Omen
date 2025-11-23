import PushNotification, {
  PushNotificationScheduleObject,
} from 'react-native-push-notification';
import { Reminder } from '../../contexts/ReminderContext/types';

class NotificationService {
  constructor() {
    PushNotification.configure({
      onRegister: token => console.log('TOKEN:', token),
      onNotification: notification =>
        console.log('NOTIFICATION:', notification),
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  createDefaultChannel(): void {
    PushNotification.createChannel(
      {
        channelId: 'default-channel-id',
        channelName: 'Default Channel',
        importance: 4,
      },
      created => console.log(`createChannel returned '${created}'`),
    );
  }

  scheduleReminder(reminder: Reminder): void {
    const date = this.getNotificationDate(reminder);

    if (!date) {
      console.warn('Invalid date for reminder:', reminder);
      return;
    }

    const options: PushNotificationScheduleObject = {
      channelId: 'default-channel-id',
      title: 'Reminder',
      message: reminder.title,
      date,
      allowWhileIdle: true,
      repeatType: reminder.date === 'daily' ? 'day' : undefined,
      userInfo: { id: reminder.id },
      smallIcon: 'ic_notification',
      id: String(reminder.id),
    };

    PushNotification.localNotificationSchedule(options);
    console.log('Scheduled reminder:', reminder.title, 'at', date);
  }

  cancelReminder(reminderId: number): void {
    PushNotification.cancelLocalNotification(String(reminderId));
  }

  updateReminder(reminder: Reminder): void {
    this.cancelReminder(reminder.id);
    this.scheduleReminder(reminder);
  }

  private getNotificationDate(reminder: Reminder): Date | null {
    const now = new Date();

    if (reminder.date === 'daily') {
      const [hours, minutes] = reminder.time
        .replace(/\s+/g, ' ')
        .split(' ')[0]
        .split(':')
        .map(Number);
      const next = new Date();
      next.setHours(hours, minutes, 0, 0);

      // If the selected time already passed today, schedule for tomorrow
      if (next <= now) next.setDate(next.getDate() + 1);

      return next;
    } else {
      // One-time reminder
      const [hours, minutes] = reminder.time
        .replace(/\s+/g, ' ')
        .split(' ')[0]
        .split(':')
        .map(Number);
      const target = new Date(reminder.date);
      target.setHours(hours, minutes, 0, 0);

      // Past date safety check
      if (target <= now) return null;

      return target;
    }
  }
}

// Use permissions on login for notification access
const notificationService = new NotificationService();
export default notificationService;
