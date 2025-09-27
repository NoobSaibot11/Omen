import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import { ReminderCardProps } from './types';

const ReminderCard = ({ reminder }: ReminderCardProps) => {
  return (
    <View style={styles.ParentWrapper}>
      <View style={styles.ChildWrapper}>
        <Image source={reminder.icon} style={styles.ImageStyle} />

        <View style={styles.TextWrapper}>
          <Text style={styles.TitleStyle}>{reminder.title}</Text>

          <View style={styles.TimeWrapper}>
            <Text style={styles.TimeStyle}>{reminder.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReminderCard;
