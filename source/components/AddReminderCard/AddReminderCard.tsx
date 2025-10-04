import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RemindersScreenProps } from '../../screens/RemindersScreen/types';

const AddReminderCard = () => {
  const navigation = useNavigation<RemindersScreenProps['navigation']>();

  return (
    <TouchableOpacity
      style={styles.ParentWrapper}
      onPress={() =>
        navigation.navigate('CRUDStack', {
          screen: 'AddReminderScreen',
        })
      }
    >
      <Text style={styles.TextStyle}>Add reminder</Text>
    </TouchableOpacity>
  );
};

export default AddReminderCard;
