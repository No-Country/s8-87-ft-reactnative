import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import firebase from "../database/firebase.js";

const LogIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Usuario"
          onChangeText={(value) => handleChangeText("user", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Contraseña"
          onChangeText={(value) => handleChangeText("pass", value)}
        />
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 35 },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
