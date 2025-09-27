import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const AddReminderCard = () => {
  return (
    <View style={styles.ParentWrapper}>
      <Text style={styles.TextStyle}>Add reminder</Text>
    </View>
  );
};

export default AddReminderCard;
