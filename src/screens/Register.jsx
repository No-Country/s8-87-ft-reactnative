import React, { useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { auth, db } from "../firebase/firebase.js";
import { Formik } from "formik";
import * as Yup from "yup";
import TopBar from "../components/UI/TopBar.jsx";
import StyledTextInput from "../components/UI/inputs/StyledTextInput.jsx";
import StyledButton from "../components/UI/buttons/StyledButton.jsx";
import StyledSubmitButton from "../components/UI/buttons/StyledSubmitButton.jsx";

const validationSchema = Yup.object({
  name: Yup.string().min(3, "Nombre Inválido").required("Nombre requerido"),
  lastname: Yup.string()
    .min(3, "Apellido Inválido")
    .required("Apellido requerido"),
  email: Yup.string().email("Email inválido").required("Email requerido"),
  password: Yup.string()
    .trim(6, "Constraseña muy corta")
    .required("Contraseña requerida"),
});

const Register = (props) => {
  const userInfo = {
    name: "",
    lastname: "",
    email: "",
    password: "",
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        props.navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleCreateUser = (values) => {
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        AddUser(user.uid, values);
        // console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const AddUser = async (id, values) => {
    try {
      await db.collection("users").doc(id).set({
        name: values.name,
        lastname: values.lastname,
        email: values.email,
        img: null,
        bio: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.botonera}>
        <TopBar {...props} section="register" />
      </View>
      <View style={styles.innerContainer}>
        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleCreateUser(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const { name, lastname, email, password } = values;
            return (
              <>
                <StyledTextInput
                  value={name}
                  error={touched.name && errors.name}
                  placeholder="Nombre"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
                <StyledTextInput
                  value={lastname}
                  error={touched.lastname && errors.lastname}
                  placeholder="Apellido"
                  onChangeText={handleChange("lastname")}
                  onBlur={handleBlur("lastname")}
                />
                <StyledTextInput
                  value={email}
                  error={touched.email && errors.email}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                <StyledTextInput
                  secureTextEntry
                  value={password}
                  error={touched.password && errors.password}
                  placeholder="Contraseña"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                <View style={styles.botones}>
                  <StyledSubmitButton
                    submitting={isSubmitting}
                    onPress={handleSubmit}
                    title="CREAR NUEVA CUENTA"
                  />
                </View>
                <View style={styles.botones}>
                  <StyledButton
                    name="YA TENGO CUENTA"
                    navigate="Login"
                    {...props}
                    fillGrey
                  />
                </View>
              </>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 0 },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 35,
    paddingTop: 0,
  },
  botones: {
    padding: 0,
    marginBottom: 10,
    marginTop: 20,
  },
  botonera: {
    flexDirection: "row",
  },
});
