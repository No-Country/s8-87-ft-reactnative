import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SquareButton } from "../UI/Buttons";
import { useNavigation } from "@react-navigation/native";

export default function BioExperiencias(user) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <SquareButton
          style={styles.buttons}
          text={"MI BIO"}
          onPress={() => {
            return navigation.navigate("MI BIO");
          }}
        />
      </View>

      <SquareButton
        text={"+ EXPERIENCIAS"}
        onPress={() => {
          return navigation.navigate("SUBIR EXPERIENCIA");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 156,
  },
  buttonContainer: {
    marginBottom: 16,
  },
});
