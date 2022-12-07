import React, { useState, useEffect, useContext } from "react";
import { View, Text, Button } from "react-native";
import { auth, getUserInfo } from "../../firebase/firebase.js";
import { UserContext } from "../../context/UserContext.jsx";

///import { useUserData } from "../../hooks/useUserData.js";

const Logout = (props) => {
  const [dataUser, setDataUser] = useState(null);
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const getName = async () => {
    const user = await getUserInfo(auth.currentUser?.uid);
    setDataUser(user);
    console.log(dataUser, user);
  };

  useEffect(() => {
    getName();
  }, []);

  signOutUser = async () => {};

  const handleSignOut = async () => {
    try {
      await auth.signOut().then(() => {
        setDataUser(null);
        setUser(null);
        props.navigation.navigate("Landing");
      });
    } catch (e) {
      console.log(e);
    }
  };

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
