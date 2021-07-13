import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
        // options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
