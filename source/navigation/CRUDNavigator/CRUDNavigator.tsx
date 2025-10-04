import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AddReminderScreen, UpdateReminderScreen } from '../../screens';
import { CRUDStackParamList } from './types';

const Stack = createNativeStackNavigator<CRUDStackParamList>();

const CRUDStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AddReminderScreen"
      screenOptions={{
        headerShown: false,
        navigationBarColor: 'black',
      }}
    >
      <Stack.Screen name="AddReminderScreen" component={AddReminderScreen} />
      <Stack.Screen
        name="UpdateReminderScreen"
        component={UpdateReminderScreen}
      />
    </Stack.Navigator>
  );
};

export default CRUDStack;
