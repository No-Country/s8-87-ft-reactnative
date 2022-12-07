import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { st, auth, updateUserInfo } from "../../firebase/firebase.js";
import { UserContext } from "../../context/UserContext.jsx";

export default function ProfilePictureName({
  imgSize,
  nameSize,
  displayText,
  edit,
}) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState();
  const [lastname, setLastname] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const isFocused = useIsFocused();

  useEffect(() => {
    setImage(user.img || "user-icon.jpg");
    setName(user.name);
    setLastname(user.lastname);
    console.log("si: ", user);
  }, [isFocused, image]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    setUploading(true);
    const response = await fetch(uri);
    const blob = await response.blob();
    const filename = uri.substring(uri.lastIndexOf("/") + 1);
    let ref = st.ref().child(filename).put(blob);

    try {
      await ref;
      const data = { img: filename };
      setImage(filename);
      setUser((user) => ({ ...user, img: filename }));
      updateUserInfo(auth.currentUser?.uid, data);
    } catch (error) {
      console.log(error);
    }

    setUploading(false);

    Alert.alert("Foto subida!");
  };

  if (!displayText) {
    displayText = "flex";
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={edit && pickImage}>
        <Image
          style={{
            ...styles.image,
            width: imgSize.width,
            height: imgSize.height,
          }}
          source={{
            uri: `https://firebasestorage.googleapis.com/v0/b/b-stage-b16c4.appspot.com/o/${image}?alt=media&token=62206790-2a38-4782-bfb7-8d33f75b8b3f`,
          }}
        />
      </TouchableHighlight>
      <Text
        style={{ ...styles.text, fontSize: nameSize, display: displayText }}
      >
        {name && name.split(" ")[0]} {lastname && lastname.split(" ")[0]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 80,
    marginBottom: 5,
  },
  text: {
    color: "#757575",
    textAlign: "center",
  },
});
