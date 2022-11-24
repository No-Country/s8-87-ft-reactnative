import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/Landing.jsx";
import LogIn from "../screens/Login.jsx";
import Register from "../screens/Register.jsx";
import HomeTabNavigator from "./HomeTabNavigator.jsx";
import MiBio from "../screens/MiBio.jsx";
import TresPuntos from "../components/TresPuntos.jsx";
import SubirExperiencia from "../components/SoyArtista/SubirExperiencia.jsx";
import { palette } from "../utils/palette.js";

const Stack = createNativeStackNavigator();

const LandingNavigation = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#DAD5D1",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerRight: () => <TresPuntos /> }}>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LogIn}
          options={{
            title: "Log In",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#B3282B",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Registro",
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#B3282B",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MI BIO"
          component={MiBio}
          options={{
            headerStyle: {
              backgroundColor: palette.AuraOrange,
            },
            headerTintColor: "white",
            headerRight: () => <TresPuntos />,
          }}
        />
        <Stack.Screen
          name="SUBIR EXPERIENCIA"
          component={SubirExperiencia}
          options={{
            headerStyle: {
              backgroundColor: palette.AuraOrange,
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LandingNavigation;
