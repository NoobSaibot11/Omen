import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppStackParamList } from './types';
import { ProfilePage, RemindersScreen } from '../../screens';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="RemindersScreen"
      screenOptions={{
        headerShown: false,
        navigationBarColor: 'black',
      }}
    >
      <Stack.Screen name="RemindersScreen" component={RemindersScreen} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
    </Stack.Navigator>
  );
};

export default AppStack;
