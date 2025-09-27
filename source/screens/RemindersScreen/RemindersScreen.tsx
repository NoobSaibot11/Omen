import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AddReminderCard, ReminderCard, ScreenWrapper } from '../../components';
import ProfileIcon from '../../assets/icons/profile_pic.png';
import useGetReminders from './hooks/useGetReminders';
import styles from './styles';
import { RemindersScreenProps } from './types';

const RemindersScreen = ({ navigation }: RemindersScreenProps) => {
  const reminders = useGetReminders();

  return (
    <ScreenWrapper>
      <View style={styles.ParentWrapper}>
        <Text style={styles.TitleTextStyle}>Reminders</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AuthStack', { screen: 'SplashScreen' })
          }
        >
          <Image source={ProfileIcon} />
        </TouchableOpacity>
      </View>
      <AddReminderCard />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ChildWrapper}
      >
        <ReminderCard reminder={reminders[0]} />
        <ReminderCard reminder={reminders[1]} />
        <ReminderCard reminder={reminders[2]} />
        <ReminderCard reminder={reminders[0]} />
        <ReminderCard reminder={reminders[1]} />
        <ReminderCard reminder={reminders[2]} />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default RemindersScreen;
