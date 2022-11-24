import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function ProfilePictureName({ imgSize, nameSize, user }) {
  const altura = { ancho: 100, alto: 100 };

  return (
    <View style={styles.container}>
      <Image
        style={{
          ...styles.image,
          width: imgSize.width,
          height: imgSize.height,
        }}
        source={require("../../assets/images/user-icon.jpg")}
      />
      <Text style={{ ...styles.text, fontSize: nameSize }}>
        {user.name} {user.lastname}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 137,
    fontFamily: "Roboto",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 80,
    marginBottom: 5,
  },
  text: {
    color: "#757575",
    textAlign: "center",
  },
});
