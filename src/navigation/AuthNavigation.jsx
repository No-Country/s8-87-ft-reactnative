import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Register from '../screens/Register'
import HomeTabNavigator from './HomeTabNavigator'

export default function AuthNavigation() {

    const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen 
      name="Home" 
      component={HomeTabNavigator} 
      options={{
        headerShown: false,
      }}
      />
    </Stack.Navigator>
  )
}