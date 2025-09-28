import React from 'react';

import ExitIcon from '../../assets/icons/exit.png';
import Profile from '../../assets/icons/profile.png';
import { ScreenWrapper } from '../../components';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useGetTime } from './hooks/useGetTime';
import { ProfilePageProps } from './types';

import ProfileIcon from '../../assets/icons/profile_icon.png';
import SettingsIcon from '../../assets/icons/settings.png';
import AboutUsIcon from '../../assets/icons/about.png';
import styles from './styles';

const ProfilePage = ({ navigation }: ProfilePageProps) => {
  const { time, date } = useGetTime();

  const onExitPress = () =>
    navigation.navigate('AuthStack', { screen: 'LandingScreen' });

  const onUsernameCardPress = () => {};
  const onSettingsCardPress = () => {};
  const onAboutUsCardPress = () => navigation.navigate('AboutScreen');

  return (
    <ScreenWrapper>
      <View style={styles.ParentWrapper}>
        <Text style={styles.TitleTextStyle}>Profile</Text>
        <TouchableOpacity onPress={onExitPress}>
          <Image source={ExitIcon} style={styles.ExitIconStyle} />
        </TouchableOpacity>
      </View>

      <View style={styles.ChildWrapper}>
        <Image source={Profile} style={styles.ProfileImageStyle} />
        <Text style={styles.NameTextStyle}>Scorpion</Text>

        <Text style={styles.TimeTextStyle}>{time}</Text>
        <Text style={styles.DateTextStyle}>{date}</Text>
      </View>

      <View style={styles.CardWrapper}>
        <TouchableOpacity
          style={styles.UsernameCardStyle}
          onPress={onUsernameCardPress}
        >
          <Image source={ProfileIcon} style={styles.UserNameImageStyle} />
          <Text style={styles.UserNameTextStyle}>Username</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.SettingCardStyle}
          onPress={onSettingsCardPress}
        >
          <Image source={SettingsIcon} style={styles.SettingImageStyle} />
          <Text style={styles.SettingTextStyle}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.AboutUsCardStyle}
          onPress={onAboutUsCardPress}
        >
          <Image source={AboutUsIcon} style={styles.AboutUsImageStyle} />
          <Text style={styles.AboutUsTextStyle}>About us</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default ProfilePage;
