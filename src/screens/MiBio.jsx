import { View, Alert, StyleSheet } from "react-native";
import React, { useContext } from "react";
import ProfilePictureName from "../components/SoyArtista/ProfilePictureName";

import MiBioIngresar from "../components/MiBio/MiBioIngresar";
import { UserContext } from "../context/UserContext.jsx";

export default function MiBio(props) {
  const { user } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <ProfilePictureName
        imgSize={{ width: 121, height: 121 }}
        nameSize={25}
        user={user}
        edit
      />
      <MiBioIngresar {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
  },
});
