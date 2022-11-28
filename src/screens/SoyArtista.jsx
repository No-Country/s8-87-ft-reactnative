import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React, { useEffect, useContext } from "react";
import SoyArtistaHeader from "../components/SoyArtista/SoyArtistaHeader";
import ExperienceCard from "../components/SoyArtista/ExperienceCard";
import SoyArtistaList from "../components/SoyArtista/SoyArtistaList";
import { auth, getUserInfo } from "../firebase/firebase.js";
import { UserContext } from "../context/UserContext.jsx";

export default function SoyArtista() {
  const { user, setUser } = useContext(UserContext);

  const getData = async () => {
    const dataUser = await getUserInfo(auth.currentUser?.uid);
    setUser(dataUser);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {!user && <Text>Loading</Text>}
      {user && <SoyArtistaHeader user={user} />}
      {user && <SoyArtistaList user={user} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DAD5D1",
  },
});
