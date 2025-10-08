import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppStackParamList } from './types';
import { AboutScreen, ProfilePage, RemindersScreen } from '../../screens';
import CRUDStack from '../CRUDNavigator/CRUDNavigator';

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
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="CRUDStack" component={CRUDStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
