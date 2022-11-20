import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
//import { auth } from "../../../firebase/firebase";

const styles = StyleSheet.create({
  buttonFill: {
    paddingVertical: 10,
    backgroundColor: "#B3282B",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 10,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#B3282B",
    borderWidth: 1,
  },
  buttonText: {
    color: "#B3282B",
    fontSize: 14,
  },
  buttonFillText: {
    color: "#fff",
    fontSize: 14,
  },
});

const StyledButton = (props) => {
  const { name, navigate, fill } = props;
  const textStyle = fill ? styles.buttonFillText : styles.buttonText;
  const buttonStyle = fill ? styles.buttonFill : styles.button;
  return (
    <Pressable
      style={buttonStyle}
      onPress={
        typeof navigate === "string"
          ? () => props.navigation.navigate(navigate)
          : navigate
      }
    >
      <Text style={textStyle}>{name}</Text>
    </Pressable>
  );
};

export default StyledButton;
