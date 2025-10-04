import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { ReminderCardProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { RemindersScreenProps } from '../../screens/RemindersScreen/types';

const ReminderCard = ({ reminder }: ReminderCardProps) => {
  const navigation = useNavigation<RemindersScreenProps['navigation']>();

  const onReminderCardPress = () =>
    navigation.navigate('CRUDStack', {
      screen: 'UpdateReminderScreen',
      params: {
        selectedReminder: reminder,
      },
    });

  return (
    <TouchableOpacity
      style={styles.ParentWrapper}
      onPress={onReminderCardPress}
    >
      <View style={styles.ChildWrapper}>
        <Image source={reminder.icon} style={styles.ImageStyle} />

        <View style={styles.TextWrapper}>
          <Text style={styles.TitleStyle}>{reminder.title}</Text>

          <View style={styles.TimeWrapper}>
            <Text
              style={styles.TimeStyle}
            >{`${reminder.date}, ${reminder.time}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReminderCard;
