import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AddReminderCard, ReminderCard, ScreenWrapper } from '../../components';
import ProfileIcon from '../../assets/icons/profile_pic.png';
import styles from './styles';
import { RemindersScreenProps } from './types';
import { useReminderContext } from '../../contexts/ReminderContext';

const RemindersScreen = ({ navigation }: RemindersScreenProps) => {
  const { state } = useReminderContext();
  const { reminders } = state;

  return (
    <ScreenWrapper>
      <View style={styles.ParentWrapper}>
        <Text style={styles.TitleTextStyle}>Reminders</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
          <Image source={ProfileIcon} />
        </TouchableOpacity>
      </View>
      <AddReminderCard />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ChildWrapper}
      >
        {reminders.map(reminder => (
          <ReminderCard key={reminder.id} reminder={reminder} />
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default RemindersScreen;
