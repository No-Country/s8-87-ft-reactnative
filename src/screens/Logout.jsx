import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { auth, db, getUserInfo } from "../../firebase/firebase.js";

///import { useUserData } from "../../hooks/useUserData.js";

const Logout = (props) => {
  const [dataUser, setDataUser] = useState(null);
  const [error, setError] = useState(null);

  const getName = async () => {
    const user = await getUserInfo(auth.currentUser?.uid);
    setDataUser(user);
    console.log(dataUser, user);
  };

  useEffect(() => {
    getName();
  }, []);

  const handleSignOut = () =>
    auth.signOut().then(() => props.navigation.navigate("Landing"));

  return (
    <View>
      {dataUser && <Text>Hola {dataUser.name}</Text>}
      <View>
        <Button title="LogOut" onPress={handleSignOut} />
      </View>
    </View>
  );
};

export default Logout;
