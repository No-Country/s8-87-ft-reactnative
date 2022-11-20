import React, { useState, useEffect } from "react";
import { View, Button, TextInput, StyleSheet, Alert } from "react-native";
import StyledButton from "../components/UI/buttons/StyledButton.jsx";
import TopBar from "../components/UI/TopBar.jsx";
import { auth } from "../firebase/firebase.js";

const LogIn = (props) => {
  const [state, setState] = useState({ email: "", pass: "" });
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && login) {
        props.navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, [login]);

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(state.email, state.pass)
      .then((userCredential) => {
        console.log("sing in");
        const user = userCredential.user;
        setLogin(true);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.botonera}>
        <TopBar {...props} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Email"
            onChangeText={(value) => handleChangeText("email", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Contraseña"
            onChangeText={(value) => handleChangeText("pass", value)}
          />
        </View>
        <View style={styles.botones}>
          <StyledButton
            name="INGRESAR"
            navigate={handleSignIn}
            {...props}
            fill
          />
          {/* <Button title="INGRESAR" /> */}
        </View>
        {/* <View style={styles.botones}>
        <Button title="
        GOOGLE" onPress={signIn} />
      </View> */}
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 0 },
  innerContainer: { flex: 1, padding: 35 },
  inputGroup: {
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  botones: {
    padding: 0,
    marginBottom: 15,
  },
  botonera: {
    flexDirection: "row",
  },
});
