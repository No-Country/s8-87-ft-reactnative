import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const StyledTextArea = (props) => {
  const { placeholder, label, error } = props;
  return (
    <>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>{label}</Text>
        {error ? (
          <Text style={{ color: "red", fontSize: 14 }}>{error}</Text>
        ) : null}
      </View>
      <TextInput
        multiline
        numberOfLines={4}
        {...props}
        placeholder={placeholder}
        style={styles.input}
      />
    </>
  );
};

export default StyledTextArea;

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    height: 200,
    borderRadius: 4,
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 10,
    textAlignVertical: "top",
  },
});
