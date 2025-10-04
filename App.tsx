import { StyleSheet, View } from 'react-native';
import AppStack from './source/navigation/RootNavigator/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from './source/components';
import { ReminderProvider } from './source/contexts/ReminderContext';

function App() {
  return (
    <NavigationContainer>
      <ReminderProvider>
        <SafeAreaProvider>
          <View style={styles.container}>
            <StatusBar />
            <AppStack />
          </View>
        </SafeAreaProvider>
      </ReminderProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
