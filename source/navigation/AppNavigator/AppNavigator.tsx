import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppStackParamList } from './types';
import { Home } from '../../screens';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        navigationBarColor: 'black',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
