import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React, { useContext } from "react";
import SoyArtistaHeader from "../components/SoyArtista/SoyArtistaHeader";
import ExperienceCard from "../components/SoyArtista/ExperienceCard";
import Loader from "../components/Loader/Loader";
import SoyArtistaList from "../components/SoyArtista/SoyArtistaList";
import { UserContext } from "../context/UserContext.jsx";

export default function SoyArtista() {
  const { user, setUser } = useContext(UserContext);

  return (
    <View style={styles.container}>
      {!user && <Loader />}
      {user && <SoyArtistaHeader user={user} />}
      {user && <SoyArtistaList user={user} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAD5D1",
  },
});
