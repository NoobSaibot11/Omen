import { Reminder } from '../../contexts/ReminderContext/types';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Platform } from 'react-native';
import PushNotification, {
  Importance,
  PushNotificationScheduleObject,
  ReceivedNotification,
} from 'react-native-push-notification';

class NotificationService {
  constructor() {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token: any) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (
        notification: Omit<ReceivedNotification, 'userInfo'>,
      ) {
        console.log('NOTIFICATION:', notification);

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification: ReceivedNotification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (error: any) {
        console.error(error.message, error);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: Platform.OS === 'ios',
    });
  }

  createDefaultChannel(): void {
    PushNotification.createChannel(
      {
        channelId: 'default-channel-id',
        channelName: 'Omen',
        importance: Importance.HIGH,
      },
      (created: any) => console.log(`createChannel returned '${created}'`),
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

    console.log('>>> options', options);

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
