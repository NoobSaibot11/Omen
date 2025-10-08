import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootNavigatorParams } from './types';
import AuthStack from '../AuthNavigator/AuthStack';
import AppStack from '../AppNavigator/AppNavigator';
import { ReminderProvider } from '../../contexts/ReminderContext';
import { AuthProvider } from '../../contexts/AuthContext';

const Stack = createNativeStackNavigator<RootNavigatorParams>();

const RootNavigator = () => {
  return (
    <AuthProvider>
      <ReminderProvider>
        <Stack.Navigator
          initialRouteName="AuthStack"
          screenOptions={{
            headerShown: false,
            navigationBarColor: 'black',
          }}
        >
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="AppStack" component={AppStack} />
        </Stack.Navigator>
      </ReminderProvider>
    </AuthProvider>
  );
};

export default RootNavigator;
