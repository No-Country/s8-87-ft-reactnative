import React from "react";
import LandingNavigation from "./src/navigation/LandingNavigation.jsx";

/* Asi podría ir cuando implementemos el auth */
/* {isAuthenticated ? HomeTabNavigator : AuthNavigation } */

export default function App() {
  return <LandingNavigation />;
}
