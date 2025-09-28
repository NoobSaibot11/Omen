import React from 'react';
import { ScreenWrapper } from '../../components';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import OmenImage1 from '../../assets/about_screen_1.png';
import OmenImage2 from '../../assets/about_screen_2.png';

import CheckIcon from '../../assets/icons/checkmark.png';
import CalenderIcon from '../../assets/icons/calendar.png';
import { AboutScreenProps } from './types';
import styles from './styles';

const AboutScreen = ({ navigation }: AboutScreenProps) => {
  const onFooterButtonPress = () => navigation.navigate('RemindersScreen');

  return (
    <ScreenWrapper>
      <Text style={styles.TitleTextStyle}>About</Text>

      <View style={styles.GoalWrapper1}>
        <Image source={OmenImage1} style={styles.ImageStyle1} />

        <View style={styles.TextWrapperStyle1}>
          <Text style={styles.TextStyle11}>
            Our goal is simple. To help you,
          </Text>

          <Text style={styles.TextStyle12}>1. Stay organized</Text>
        </View>
      </View>

      <View style={styles.TextWrapperStyle2}>
        <View style={styles.TextWrapper2}>
          <Text style={styles.TextStyle21}>2. stress free</Text>

          <Text style={styles.TextStyle22}>3. always on track</Text>
        </View>

        <Image source={OmenImage2} style={styles.ImageStyle2} />
      </View>

      <View style={styles.TextWrapperStyle3}>
        <Text style={styles.TextStyle31}>What is Omen?</Text>

        <View style={styles.GuideStyle}>
          <Image source={CheckIcon} style={styles.GuideImageStyle} />
          <Text style={styles.GuideTextStyle}>Set reminders for tasks</Text>
        </View>

        <View style={styles.GuideStyle}>
          <Image source={CalenderIcon} style={styles.GuideImageStyle} />
          <Text style={styles.GuideTextStyle}>
            Keep track of important deadlines
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={onFooterButtonPress}
        style={styles.FooterButtonWrapperStyle}
      >
        <Text style={styles.FooterTextWrapper}>Add reminders</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

export default AboutScreen;
