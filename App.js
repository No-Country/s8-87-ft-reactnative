import React, { useState, useMemo } from "react";
import { View, StyleSheet } from "react-native";

import LandingNavigation from "./src/navigation/LandingNavigation.jsx";

/* Asi podría ir cuando implementemos el auth */
/* {isAuthenticated ? HomeTabNavigator : AuthNavigation } */

export default function App() {
  return <LandingNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    justifyContent: "flex-end",
    paddingBottom: 60,
    alignItems: "center",
    backgroundColor: "#dad5d1",
  },
});
