import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { palette } from "../../utils/palette";

export default function TopArtistaCard({ data }) {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate("PERFIL DE USUARIO", data);
  };

  return (
    <TouchableWithoutFeedback onPress={goToProfile}>
      <View style={styles.barContainer}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Image
              style={styles.img}
              source={{
                uri: `https://firebasestorage.googleapis.com/v0/b/b-stage-b16c4.appspot.com/o/${
                  data.img || "user-icon.jpg"
                }?alt=media&token=62206790-2a38-4782-bfb7-8d33f75b8b3f`,
              }}
            />
            <View>
              <Text style={styles.name}>{data.name}</Text>
              <Text style={styles.city}>{data.city}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  container: {
    height: 71,
    backgroundColor: "#F0F0F0",
    width: "90%",
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#938F99",
  },
  innerContainer: {
    width: "80%",
    height: 69,
    backgroundColor: palette.AuraOrange,
    flexDirection: "row",
    alignItems: "center",
    borderBottomStartRadius: 11,
    borderTopStartRadius: 11,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 50,
    margin: 20,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    paddingBottom: 8,
  },
  city: {
    color: "#E6E1E5",
    fontSize: 14,
    fontWeight: "400",
  },
});
