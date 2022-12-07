import { View, StyleSheet } from "react-native";
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
        
        <Text style={styles.role}>Actriz - Influencer - Cantante</Text>
        <Text style={styles.country}>Caracas, Venezuela</Text>
        <Text style={styles.text}>
          Venezolano. Frontend Developer, Artista de corazon lllllllllllllllllllllllllllllllllllllllllllllllllllllllllll12233250090987692763.
        </Text>
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
  container2:{
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 10,
  },
  role:{
    fontSize: 12,
    fontWeight: "500",
    paddingVertical: 3,
    
  },
  country:{
    color: "#757575",
    paddingBottom: 5,
    fontSize: 12,
  },
  text:{

  }
});
