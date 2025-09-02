import { StyleSheet, View } from 'react-native';
import AppStack from './source/navigation/AppNavigator/AppStack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StatusBar from './source/components/StatusBar';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <View style={styles.container}>
          <StatusBar />
          <AppStack />
        </View>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
