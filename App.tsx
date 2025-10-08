import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from './source/components';
import { RootNavigator } from './source/navigation/RootNavigator';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <View style={styles.container}>
          <StatusBar />
          <RootNavigator />
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
