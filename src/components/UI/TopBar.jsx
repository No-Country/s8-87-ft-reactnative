import React from "react";
import { View, StyleSheet, Button, Pressable, Text } from "react-native";

function TopBar(props) {
  return (
    <View style={styles.botonera}>
      <Pressable
        style={{
          ...styles.botones,
          borderBottomWidth: props.section === "register" ? 2 : 0,
        }}
        backgroundColor="#B3282B"
        onPress={() => props.navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>REGISTRARME</Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.botones,
          borderBottomWidth: props.section === "login" ? 2 : 0,
        }}
        backgroundColor="#B3282B"
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>LOGGEARME</Text>
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
    width: "50%",
    height: 50,
    borderBottomColor: "#FFF",
  },
  botonera: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#B3282B",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,

    elevation: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});
