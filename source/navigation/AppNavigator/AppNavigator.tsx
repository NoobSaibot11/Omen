import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppStackParamList } from './types';
import { RemindersScreen } from '../../screens';

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
    </Stack.Navigator>
  );
};

export default AppStack;
