import React from "react";
import { StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";

const StyledSubmitButton = ({ title, submitting, onPress }) => {
  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={styles.buttonFill}
    >
      <Text style={styles.buttonFillText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonFill: {
    paddingVertical: 10,
    backgroundColor: "#B3282B",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFillText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default StyledSubmitButton;
