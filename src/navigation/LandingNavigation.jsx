import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/Landing.jsx";
import LogIn from "../screens/Login.jsx";
import Register from "../screens/Register.jsx";
import SoyArtista from "../screens/SoyArtista.jsx";

const Stack = createNativeStackNavigator();

const LandingNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LogIn}
          options={{ title: "Log In" }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Registro",

            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#B3282B",
            },
          }}
        />
        <Stack.Screen name="SoyArtista" component={SoyArtista} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LandingNavigation;
