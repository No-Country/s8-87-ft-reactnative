import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthNavigation from './src/navigation/AuthNavigation';
import HomeTabNavigator from './src/navigation/HomeTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* Asi podría ir cuando implementemos el auth */}
      {/* {isAuthenticated ? AuthNavigation : HomeTabNavigator } */}
      <AuthNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
