import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  LandingScreen,
  SplashScreen,
  SupportNotAvailable,
} from '../../screens';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        navigationBarColor: 'black',
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        name="SupportNotAvailable"
        component={SupportNotAvailable}
      />
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
