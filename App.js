import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StyledButton from "./src/components/UI/StyledButton";

export default function App() {
  return (
    <View style={styles.container}>
      <StyledButton name="LOGGEARME" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
