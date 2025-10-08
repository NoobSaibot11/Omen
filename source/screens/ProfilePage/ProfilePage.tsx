import React, { useState } from 'react';

import ExitIcon from '../../assets/icons/exit.png';
import Profile from '../../assets/icons/profile.png';
import { BottomSheet, ScreenWrapper } from '../../components';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useGetTime } from './hooks/useGetTime';
import { ProfilePageProps } from './types';

import ProfileIcon from '../../assets/icons/profile_icon.png';
import SettingsIcon from '../../assets/icons/settings.png';
import AboutUsIcon from '../../assets/icons/about.png';
import styles from './styles';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../../navigation/RootNavigator/types';

const ProfilePage = ({ navigation }: ProfilePageProps) => {
  const { time, date } = useGetTime();
  const [showSheet, setShowSheet] = useState<boolean>(false);
  const { state, logout } = useAuthContext();
  const { username } = state;
  const appNavigator =
    useNavigation<RootStackScreenProps<'AuthStack'>['navigation']>();

  const onExitPress = async () => {
    await logout();
    appNavigator.reset({
      index: 0,
      routes: [{ name: 'AuthStack', params: { screen: 'LandingScreen' } }],
    });
  };
  const openSupportSheet = () => setShowSheet(true);

  const onUsernameCardPress = () => openSupportSheet();
  const onSettingsCardPress = () => openSupportSheet();
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
        <Text style={styles.NameTextStyle}>{username}</Text>

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

      <BottomSheet
        isVisible={showSheet}
        closeSheet={() => setShowSheet(false)}
        message="This feature is not available yet."
        title="Support not available"
      />
    </ScreenWrapper>
  );
};

export default ProfilePage;
