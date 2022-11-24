import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { auth, db, getUserInfo } from "../firebase/firebase.js";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function MenuComponent() {
  const navigation = useNavigation();
  const handleSignOut = () =>
    auth.signOut().then(() => navigation.navigate("Landing"));

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => console.log("Ayuda")}>
        <Text style={styles.menuText}>Ayuda</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Salir")}>
        <Text style={styles.menuText}>Salir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={styles.menuText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    width: 132,
    height: 100,
    position: "absolute",
    backgroundColor: "white",
    top: 40,
    left: -125,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    elevation: 100,
  },
  menuText: {
    fontSize: 16,
    padding: 4,
    zIndex: 50,
  },
});
