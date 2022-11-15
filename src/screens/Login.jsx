import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeTabNavigator from '../navigation/HomeTabNavigator'

export default function Login() {

    const navigation = useNavigation()

  return (
    <View>
      <Text>Login</Text>
      <Button title={"ir a home"} onPress={() =>navigation.navigate("Home")}/>
    </View>
  )
}