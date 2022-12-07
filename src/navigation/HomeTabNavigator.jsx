import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SoyArtista from "../screens/SoyArtista";
import Castings from "../screens/Castings";
import BuscoArtista from "../screens/BuscoArtista";
import { palette } from "../utils/palette";
import CastingIcon from "../assets/icons/casting-icon.svg";
import SoytArtistaIcon from "../assets/icons/soy-artista-icon.svg";
import BuscoArtistaIcon from "../assets/icons/busco-artista-icon.svg";
import TresPuntos from "../components/TresPuntos";
import SearchHeader from "../components/SearchHeader";

export default function HomeTabNavigator() {
  const Tab = createBottomTabNavigator();

  const renderCastingIcon = () => {
    return <CastingIcon width={20} height={20} />;
  };

  const renderSoyArtistaIcon = () => {
    return <SoytArtistaIcon width={20} height={20} />;
  };

  const renderBuscoArtistaIcon = () => {
    return <BuscoArtistaIcon width={24} height={24} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: palette.AuraOrange,
        },
        headerTintColor: "white",
        headerTitle: () => <SearchHeader />,
        headerRight: () => <TresPuntos />,
        tabBarActiveTintColor: "#000",
        tabBarLabelStyle: {
          fontSize: 30
        },
        tabBarStyle: [
          {
            display: "flex"
          },
          null
        ]
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
          headerRight: () => <TresPuntos />,
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
