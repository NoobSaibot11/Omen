import React, { useState } from 'react';
import { ScreenWrapper } from '../../components';
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
import IconSelector from './components/IconSelector';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { getMonth } from '../ProfilePage/hooks/utils';
import styles from './styles';
import BackArrow from '../../assets/back_arrow.png';

const AddReminderScreen = ({ navigation }: AddReminderScreenProps) => {
  const [showIconSelector, setShowIconSelector] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const form = useReminderForm();

  const onIconSelection = (icon: ImageSourcePropType) =>
    form.setFieldValue('icon', icon);

  const onSave = () => {
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
                    const timeSelected = t.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    });

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
                  }}
                  onCancel={() => setShowDatePicker(false)}
                />
              </TouchableOpacity>
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
    </ScreenWrapper>
  );
};

export default AddReminderScreen;
