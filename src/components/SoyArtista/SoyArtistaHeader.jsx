import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import ProfilePictureName from "./ProfilePictureName";
import BioExperiencias from "./BioExperiencias";
import { auth, getUserInfo } from "../../firebase/firebase.js";

export default function SoyArtistaHeader() {
  const [dataUser, setDataUser] = useState(null);

  const getData = async () => {
    const user = await getUserInfo(auth.currentUser?.uid);

    setDataUser(user);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      {dataUser && (
        <ProfilePictureName
          imgSize={{ width: 100, height: 100 }}
          nameSize={20}
          user={dataUser}
        />
      )}
      {dataUser && <BioExperiencias user={dataUser} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 200,
  },
});
