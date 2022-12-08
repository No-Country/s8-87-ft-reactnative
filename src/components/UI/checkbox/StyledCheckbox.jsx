import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CheckBox from "expo-checkbox";

const StyledCheckbox = ({ children, ...props }) => {
  return (
    <View style={styles.checkContainer}>
      <CheckBox style={styles.check} {...props} />
      <Text>{children}</Text>
    </View>
  );
};

export default StyledCheckbox;

const styles = StyleSheet.create({
  checkContainer: {
    flexDirection: "row",
    margin: 10,
  },
  check: { marginRight: 8 },
});
