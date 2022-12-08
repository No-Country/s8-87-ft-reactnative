import { View, StyleSheet, Text } from "react-native";
import React from "react";
import ProfilePictureName from "./ProfilePictureName";
import BioExperiencias from "./BioExperiencias";

export default function SoyArtistaHeader({ user }) {
  return (
    <>
      <View style={styles.container}>
        <ProfilePictureName
          imgSize={{ width: 100, height: 100 }}
          nameSize={20}
          user={user}
        />
        <BioExperiencias user={user} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.role}>
          {user.actriz && "Actriz "}
          {user.actor && "Actor "}
          {user.modelo && "Modelo "}
          {user.cantante && "Cantante "}
          {user.influencer && "Influencer "}
        </Text>
        <Text style={styles.country}>
          {user.city}, {user.country}
        </Text>
        <Text style={styles.text}>{user.bio}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 150,
  },
  container2: {
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 10,
  },
  role: {
    fontSize: 12,
    fontWeight: "500",
    paddingVertical: 3,
  },
  country: {
    color: "#757575",
    paddingBottom: 5,
    fontSize: 12,
  },
  text: {},
});
