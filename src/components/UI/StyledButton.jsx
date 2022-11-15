import React from "react";
import { View, TouchableHighlight, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 328,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#B3282B",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 500,
  },
});

export default StyledButton = ({ name }) => {
  const btnStyles = styles.button;
  return (
    <TouchableHighlight style={btnStyles} underlayColor="white">
      <View>
        <Text style={styles.buttonText}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
};
