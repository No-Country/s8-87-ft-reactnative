import React from "react";
import { StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";
//import { auth } from "../../../firebase/firebase";

const styles = StyleSheet.create({
  buttonFill: {
    paddingVertical: 10,
    backgroundColor: "#B3282B",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFillGrey: {
    paddingVertical: 10,
    backgroundColor: "#757575",
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
  const { name, navigate, fill, fillGrey } = props;
  const textStyle =
    fill || fillGrey ? styles.buttonFillText : styles.buttonText;
  const buttonStyle = fill
    ? styles.buttonFill
    : fillGrey
    ? styles.buttonFillGrey
    : styles.button;
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={
        typeof navigate === "string"
          ? () => props.navigation.navigate(navigate)
          : navigate
      }
    >
      <Text style={textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
