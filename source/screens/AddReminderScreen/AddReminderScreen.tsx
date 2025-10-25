import React, { useState } from 'react';
import { BottomSheet, IconSelector, ScreenWrapper } from '../../components';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AddReminderScreenProps } from './types';
import { useReminderForm } from './hooks/useReminderForm';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { getMonth, getMonthIndex } from '../ProfilePage/hooks/utils';
import styles from './styles';
import BackArrow from '../../assets/back_arrow.png';
import CheckBox from '@react-native-community/checkbox';
import { IconMap, iconNames } from '../../utils/IconMap';

const AddReminderScreen = ({ navigation }: AddReminderScreenProps) => {
  const [showIconSelector, setShowIconSelector] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [isDaily, setIsDaily] = useState<boolean>(false);
  const [showSheet, setShowSheet] = useState<boolean>(false);
  const [sheetMessage, setSheetMessage] = useState<string>('');
  const [sheetTitle, setSheetTitle] = useState<string>('');
  const form = useReminderForm();

  const onIconSelection = (icon: iconNames) => form.setFieldValue('icon', icon);

  const onSave = () => {
    const values = form.state.values;
    const { title, date, time, year, icon } = values;
    let missingFields = '';

    if (title === '') missingFields += 'title ';
    if (icon === iconNames.placeholder) missingFields += 'icon ';
    if (time === '') missingFields += 'time ';
    if (date === '') missingFields += 'date ';

    if (missingFields !== '') {
      const finalMessage = `Please fill in the missing fields: ${missingFields
        .replaceAll(' ', ', ')
        .slice(0, -2)}`;

      setSheetTitle('Form missing fields');
      setSheetMessage(finalMessage);
      setShowSheet(true);
      return;
    }

    if (date !== 'Daily') {
      const currentTime = new Date();

      // Check whether the selected year has already passed
      if (year < String(currentTime.getFullYear())) {
        setSheetTitle('Invalid Date');
        setSheetMessage('The year selected has already passed.');
        setShowSheet(true);
        return;
      }

      // Check whether the selected month and date have already passed
      const [monthStr, dayStr] = date.split(' ');
      if (getMonthIndex(monthStr) < currentTime.getMonth()) {
        setSheetTitle('Invalid Date');
        setSheetMessage('The month selected has already passed.');
        setShowSheet(true);
        return;
      } else if (Number(dayStr) < currentTime.getDate()) {
        setSheetTitle('Invalid Date');
        setSheetMessage('The date selected has already passed.');
        setShowSheet(true);
        return;
      }

      const [selectedTime, extra] = time.replace(/\s+/g, ' ').split(' ');
      const [selectedHoursStr, selectedMinutesStr] = selectedTime.split(':');
      const currentHours = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();

      // Check whether the selected time has already passed for today specifically
      if (
        year === String(currentTime.getFullYear()) &&
        getMonthIndex(monthStr) === currentTime.getMonth() &&
        Number(dayStr) === currentTime.getDate()
      ) {
        // If current time is in PM
        if (currentHours > 12) {
          console.log('>>> Extra', extra);
          // Selecting AM will always be invalid
          if (extra === 'AM') {
            setSheetTitle('Invalid Time');
            setSheetMessage('The time selected has already passed.');
            setShowSheet(true);
            return;
          }

          // Selecting PM, need to check hours and minutes are passed
          const selectedHours = Number(selectedHoursStr) + 12;
          if (
            selectedHours < currentHours ||
            (selectedHours === currentHours &&
              Number(selectedMinutesStr) < currentMinutes)
          ) {
            setSheetTitle('Invalid Time');
            setSheetMessage('The time selected has already passed.');
            setShowSheet(true);
            return;
          }
        }
        // If current time is in 12 AM/PM
        else if (Number(selectedHoursStr) === 12) {
          // Selecting 12 AM is always invalid
          if (extra === 'AM') {
            setSheetTitle('Invalid Time');
            setSheetMessage('The time selected has already passed.');
            setShowSheet(true);
            return;
          }

          // After 12 PM, can not set reminder for 12 PM
          if (currentHours >= 12) {
            setSheetTitle('Invalid Time');
            setSheetMessage('The time selected has already passed.');
            setShowSheet(true);
            return;
          }
        }
        // If current time is in AM
        else {
          // Selecting PM is always valid
          // Selecting AM, need to check hours and minutes are passed
          if (extra !== 'PM') {
            const selectedHours = Number(selectedHoursStr);
            if (
              selectedHours < currentHours ||
              (selectedHours === currentHours &&
                Number(selectedMinutesStr) < currentMinutes)
            ) {
              setSheetTitle('Invalid Time');
              setSheetMessage('The time selected has already passed.');
              setShowSheet(true);
              return;
            }
          }
        }
      }
    }

    form.handleSubmit();
    navigation.navigate('AppStack', { screen: 'RemindersScreen' });
  };

  const onBackPress = () => navigation.goBack();

  return (
    <ScreenWrapper>
      <ScrollView style={styles.ParentWrapper}>
        <TouchableOpacity
          style={styles.BackButtonWrapper}
          onPress={onBackPress}
        >
          <Image source={BackArrow} style={styles.BackButtonStyle} />
        </TouchableOpacity>

        <View style={styles.TitleWrapper}>
          <Text style={styles.TitleTextStyle}>Add reminder</Text>
        </View>

        <form.Field name="title">
          {field => (
            <View style={styles.TitleFieldWrapper}>
              <TextInput
                placeholder="Enter Reminder . . ."
                placeholderTextColor="#4f4f4f"
                style={styles.TitleInput}
                value={field.state.value}
                onChangeText={field.handleChange}
              />
            </View>
          )}
        </form.Field>

        <form.Field name="icon">
          {field => (
            <View style={styles.IconFieldWrapper}>
              <TouchableOpacity
                style={styles.IconWrapper}
                onPress={() => setShowIconSelector(true)}
              >
                <Image
                  source={IconMap(field.state.value)}
                  style={styles.IconStyle}
                />
                <Text style={styles.SubTextStyle}>Icon</Text>
              </TouchableOpacity>
            </View>
          )}
        </form.Field>

        <form.Field name="time">
          {field => {
            return (
              <TouchableOpacity
                style={styles.DateTimeFieldWrapper}
                onPress={() => setShowTimePicker(true)}
              >
                {field.state.value === '' ? (
                  <Text style={styles.DateTimePlaceHolderText}>
                    Select time
                  </Text>
                ) : (
                  <Text style={styles.DateTimeTextStyle}>
                    {field.state.value}
                  </Text>
                )}

                <DateTimePicker
                  isVisible={showTimePicker}
                  mode="time"
                  onConfirm={t => {
                    const timeSelected = t
                      .toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                      .toUpperCase();

                    field.handleChange(timeSelected);
                    setShowTimePicker(false);
                  }}
                  onCancel={() => setShowTimePicker(false)}
                />
              </TouchableOpacity>
            );
          }}
        </form.Field>

        <form.Field name="date">
          {field => {
            return (
              <>
                <TouchableOpacity
                  style={[styles.DateTimeFieldWrapper, styles.DateFieldWrapper]}
                  onPress={() => setShowDatePicker(true)}
                >
                  {field.state.value === '' ? (
                    <Text style={styles.DateTimePlaceHolderText}>
                      Select date
                    </Text>
                  ) : (
                    <Text style={styles.DateTimeTextStyle}>
                      {field.state.value}
                    </Text>
                  )}

                  <DateTimePicker
                    isVisible={showDatePicker}
                    mode="date"
                    onConfirm={t => {
                      const date = Number(
                        t.toLocaleDateString('en-US', {
                          day: '2-digit',
                        }),
                      );
                      const month = getMonth(
                        Number(
                          t.toLocaleDateString('en-US', {
                            month: '2-digit',
                          }),
                        ) - 1,
                      );
                      const year = t.toLocaleDateString('en-US', {
                        year: 'numeric',
                      });

                      const selectedDate = `${month} ${date}`;
                      field.handleChange(selectedDate);
                      form.setFieldValue('year', year);
                      setShowDatePicker(false);
                      setIsDaily(false);
                    }}
                    onCancel={() => setShowDatePicker(false)}
                  />
                </TouchableOpacity>

                <View style={styles.CheckBoxStyle}>
                  <CheckBox
                    value={isDaily}
                    onValueChange={() => {
                      field.handleChange(!isDaily ? 'Daily' : '');
                      setIsDaily(!isDaily);
                    }}
                    tintColors={{ true: '#9087D5', false: '#aaa' }}
                  />
                  <Text style={styles.DailyTextStyle}>Daily</Text>
                </View>
              </>
            );
          }}
        </form.Field>

        <TouchableOpacity style={styles.FooterButtonWrapper} onPress={onSave}>
          <Text style={styles.FooterButtonTextStyle}>Save</Text>
        </TouchableOpacity>
      </ScrollView>

      <IconSelector
        showIconSelector={showIconSelector}
        hideIconSelector={() => setShowIconSelector(false)}
        onIconPress={onIconSelection}
      />

      <BottomSheet
        isVisible={showSheet}
        message={sheetMessage}
        title={sheetTitle}
        closeSheet={() => setShowSheet(false)}
      />
    </ScreenWrapper>
  );
};

export default AddReminderScreen;
