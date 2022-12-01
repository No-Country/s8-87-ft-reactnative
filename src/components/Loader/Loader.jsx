import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/loaderImage.jpg")}
      />
      <Text style={styles.text}>«El cine es un espejo pintado»</Text>
      <Text style={styles.text}>Ettore Scola</Text>
      <Text style={styles.text2}>Cargando...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: { width: 280, height: 280, marginTop: 100 },
  text: {
    color: "#B3282B",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginBotton: 10,
  },
  text2: {
    marginTop: 20,
  },
});
