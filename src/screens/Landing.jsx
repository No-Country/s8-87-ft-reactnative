import { StatusBar } from "expo-status-bar";
import React from "react";
import StyledButton from "../components/UI/buttons/StyledButton.jsx";
import { View, Text, Button, StyleSheet } from "react-native";
import Logo from "../assets/icons/Logo.jsx";

const Landing = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#B3282B" style="light" />
      <View>
        <Logo />
      </View>
      <View>
        <Text style={styles.bienvenida}>Te damos la bienvenida</Text>
      </View>
      <View>
        <Text style={styles.pregunta}>¿Cómo deseas continuar?</Text>
      </View>
      <View style={styles.botones}>
        <StyledButton name="LOGGEARME" navigate="Login" {...props} fill />
      </View>
      <View style={styles.botones}>
        <StyledButton name="REGISTRARME" navigate="Register" {...props} />
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 20,
    paddingBottom: 60,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#dad5d1",
  },
  logo: { fontSize: 40, marginBottom: 40 },
  bienvenida: { fontSize: 20, fontWeight: "bold", marginTop: 60 },
  pregunta: { fontSize: 15, marginTop: 20, marginBottom: 60 },
  botones: {
    alignSelf: "stretch",
    padding: 10,
    marginBottom: 25,
  },
});
