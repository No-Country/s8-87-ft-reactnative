import { View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import SoyArtistaHeader from "../components/SoyArtista/SoyArtistaHeader";
import SoyArtistaList from "../components/SoyArtista/SoyArtistaList";
import { UserContext } from "../context/UserContext.jsx";

export default function SoyArtista() {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <SoyArtistaHeader user={user} />
      <SoyArtistaList user={user} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAD5D1",
  },
});
