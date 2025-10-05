import React, { useState } from 'react';
import { BottomSheet, IconSelector, ScreenWrapper } from '../../components';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AddReminderScreenProps } from './types';
import { useReminderForm } from './hooks/useReminderForm';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { getMonth } from '../ProfilePage/hooks/utils';
import styles from './styles';
import BackArrow from '../../assets/back_arrow.png';
import CheckBox from '@react-native-community/checkbox';
import PlaceHolderIcon from '../../assets/icons/placeholder.png';

const AddReminderScreen = ({ navigation }: AddReminderScreenProps) => {
  const [showIconSelector, setShowIconSelector] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [isDaily, setIsDaily] = useState<boolean>(false);
  const [showSheet, setShowSheet] = useState<boolean>(false);
  const [sheetMessage, setSheetMessage] = useState<string>('');
  const [sheetTitle, setSheetTitle] = useState<string>('');
  const form = useReminderForm();

  const onIconSelection = (icon: ImageSourcePropType) =>
    form.setFieldValue('icon', icon);

  const onSave = () => {
    const values = form.state.values;
    const { title, date, time, icon } = values;
    let missingFields = '';

    if (title === '') missingFields += 'title ';
    if (icon === PlaceHolderIcon) missingFields += 'icon ';
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
                <Image source={field.state.value} style={styles.IconStyle} />
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
                      const selectedDate = `${month} ${date}`;
                      field.handleChange(selectedDate);
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
