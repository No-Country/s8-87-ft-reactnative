import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logout from "../components/Auth/Logout.jsx";

const SoyArtista = (props) => {
  return (
    <View style={styles.container}>
      <Logout {...props} />
      <Text>Soy Artista</Text>
    </View>
  );
};

export default SoyArtista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
