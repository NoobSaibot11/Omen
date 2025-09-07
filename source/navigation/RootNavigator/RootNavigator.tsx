import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootNavigatorParams } from './types';
import AuthStack from '../AuthNavigator/AuthStack';
import AppStack from '../AppNavigator/AppNavigator';

const Stack = createNativeStackNavigator<RootNavigatorParams>();

const RootNavigator = () => {
  return (
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
  );
};

export default RootNavigator;
