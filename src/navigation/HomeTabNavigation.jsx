import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SoyArtista from "../screens/SoyArtista";
import Castings from "../screens/Castings";
import BuscoArtista from "../screens/BuscoArtista";
import { palette } from "../utils/palette";

export default function HomeTabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: palette.AuraOrange,
        },
        headerTintColor: "white",
      }}
    >
      <Tab.Screen
        name="SOY ARTISTA"
        component={SoyArtista}
        options={{
          tabBarInactiveBackgroundColor: "rgba(179, 40, 43, 0.8)",
          tabBarActiveBackgroundColor: palette.AuraOrange,
          tabBarLabelStyle: {
            color: "white",
            fontSize: 12,
          },
          tabBarIcon: renderSoyArtistaIcon,
        }}
      />

      <Tab.Screen
        name="CASTINGS"
        component={Castings}
        options={{
          tabBarInactiveBackgroundColor: "rgba(179, 40, 43, 0.8)",
          tabBarActiveBackgroundColor: palette.AuraOrange,
          tabBarLabelStyle: {
            color: "white",
            fontSize: 12,
          },
          tabBarIcon: renderCastingIcon,
          tabBarItemStyle: {
            borderBottom: 2,
            borderBottomColor: "white",
            borderBottomWidth: 2,
          },
        }}
      />

      <Tab.Screen
        name="BUSCO ARTISTA"
        component={BuscoArtista}
        options={{
          tabBarInactiveBackgroundColor: "rgba(179, 40, 43, 0.8)",
          tabBarActiveBackgroundColor: palette.AuraOrange,
          tabBarLabelStyle: {
            color: "white",
            fontSize: 12,
          },
          tabBarIcon: renderBuscoArtistaIcon,
        }}
      />
    </Tab.Navigator>
  );
}
