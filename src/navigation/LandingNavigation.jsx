import React, { useState, useMemo } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/Landing.jsx";
import LogIn from "../screens/Login.jsx";
import Register from "../screens/Register.jsx";
import HomeTabNavigator from "./HomeTabNavigator.jsx";
import MiBio from "../screens/MiBio.jsx";
import TresPuntos from "../components/TresPuntos.jsx";
import SubirExperiencia from "../components/SoyArtista/SubirExperiencia.jsx";
import UserProfile from "../screens/UserProfile.jsx";
import { palette } from "../utils/palette.js";

import { UserContext } from "../context/UserContext.jsx";

const Stack = createNativeStackNavigator();

const LandingNavigation = () => {
  const [user, setUser] = useState(null);
  ///const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#DAD5D1",
    },
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
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
            <Stack.Screen
            name="PERFIL DE USUARIO"
            component={UserProfile}
            options={{
              headerStyle: {
                backgroundColor: palette.AuraOrange,
              },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default LandingNavigation;
