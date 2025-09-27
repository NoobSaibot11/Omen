import React from 'react';

import ExitIcon from '../../assets/icons/exit.png';
import Profile from '../../assets/icons/profile.png';
import { ScreenWrapper } from '../../components';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useGetTime } from './hooks/useGetTime';
import { ProfilePageProps } from './types';

const ProfilePage = ({ navigation }: ProfilePageProps) => {
  const { time, date } = useGetTime();
  return (
    <ScreenWrapper>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 20,
        }}
      >
        <Text style={{ color: '#504065', fontSize: 32, fontWeight: 600 }}>
          Profile
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AuthStack', { screen: 'LandingScreen' })
          }
        >
          <Image source={ExitIcon} style={{ height: 33, width: 33 }} />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Image
          source={Profile}
          style={{
            height: 220,
            width: 220,
          }}
        />
        <Text style={{ color: '#504065', fontSize: 32, fontWeight: 600 }}>
          Scorpion
        </Text>

        <Text style={{ color: 'white', fontSize: 48, paddingTop: 15 }}>
          {time}
        </Text>
        <Text style={{ color: 'white', fontSize: 20 }}>{date}</Text>
      </View>

      <View
        style={{
          paddingTop: 40,
        }}
      >
        <View
          style={{
            backgroundColor: '#020103ff',
            justifyContent: 'center',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            alignItems: 'center',
            height: 75,
          }}
        >
          <Text style={{ color: 'white' }}>Username</Text>
        </View>
        <View
          style={{
            backgroundColor: '#020103ff',
            justifyContent: 'center',
            alignItems: 'center',
            height: 75,
            borderColor: '#1E1E1E',
            borderTopWidth: 2,
            borderBottomWidth: 2,
          }}
        >
          <Text style={{ color: 'white' }}>Settings</Text>
        </View>
        <View
          style={{
            backgroundColor: '#020103ff',
            justifyContent: 'center',
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            alignItems: 'center',
            height: 75,
          }}
        >
          <Text style={{ color: 'white' }}>About us</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ProfilePage;
