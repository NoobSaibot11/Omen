import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/tmp/Home';
import { SplashScreen } from '../../screens/SplashSceen';
import { AppStackParams } from './types';
import { SupportNotAvailable } from '../../screens/SupportNotAvailable';

const Stack = createNativeStackNavigator<AppStackParams>();

const AppStack = () => {
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
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
