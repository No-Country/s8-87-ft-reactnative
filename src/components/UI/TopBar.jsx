import React from "react";
import { View, StyleSheet, Button, Pressable, Text } from "react-native";

function TopBar(props) {
  return (
    <View style={styles.botonera}>
      <Pressable
        style={styles.botones}
        backgroundColor="#B3282B"
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>LOGGEARME</Text>
      </Pressable>
      <Pressable onPress={() => props.navigation.navigate("Register")}>
        <Text style={styles.buttonText}>REGISTRARME</Text>
      </Pressable>
    </View>
  );
}

export default TopBar;

const styles = StyleSheet.create({
  botones: {
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B3282B",
  },
  botonera: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#B3282B",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});
