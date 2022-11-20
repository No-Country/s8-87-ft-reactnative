import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useUserData } from "../hooks/useUserData.jx";
import {  db } from "../firebase/firebase.js";

const BuscoArtista = () => {

  <View style={styles.container}>
    <Text>BuscoArtista</Text>
  </View>;
};

export default BuscoArtista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
