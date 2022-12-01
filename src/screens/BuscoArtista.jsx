import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import TopArtistaCard from "../components/BuscoArtista/TopArtistaCard";
import BuscoArtistaPills from "../components/BuscoArtista/BuscoArtistaPills";
import BuscoArtistaList from "../components/BuscoArtista/BuscoArtistaList";

const BuscoArtista = () => {
  return (
  <View>
    <BuscoArtistaPills />
    <Text style={styles.text}>TOP 10 ARTISTAS</Text>
    <BuscoArtistaList />
  </View>
  )
};

export default BuscoArtista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 21,
  }
});
