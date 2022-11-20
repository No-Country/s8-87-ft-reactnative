import React, { useState, useEffect } from "react";
import { View, Button, TextInput, StyleSheet, Text, Alert } from "react-native";
import { auth, db } from "../firebase/firebase.js";
import TopBar from "../components/UI/TopBar.jsx";

const Register = (props) => {
  const [state, setState] = useState({
    name: "",
    lastname: "",
    email: "",
    pass: "",
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        props.navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handleCreateUser = () => {
    auth
      .createUserWithEmailAndPassword(state.email, state.pass)
      .then((userCredential) => {
        const user = userCredential.user;
        AddUser(user.uid);
        // console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const AddUser = async (id) => {
    try {
      await db.collection("users").doc(id).set({
        name: state.name,
        lastname: state.lastname,
        email: state.email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.botonera}>
        <TopBar {...props} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Nombre"
            onChangeText={(value) => handleChangeText("name", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Apellido"
            onChangeText={(value) => handleChangeText("lastname", value)}
          />
        </View>
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
          <Button title="CREAR NUEVA CUENTA" onPress={handleCreateUser} />
        </View>
        {/* <View>
        <Text>O USA TUS REDES SOCIALES</Text>
      </View>
    <View style={styles.botones}>
        <Button title="GOOGLE" onPress={() => {}} />
      </View> */}
        <View style={styles.botones}>
          <Button
            title="YA TENGO CUENTA"
            onPress={() => props.navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};

export default Register;

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
