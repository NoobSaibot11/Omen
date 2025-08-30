import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppStack from './source/navigation/AppStack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StatusBar from './source/components/StatusBar';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

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
