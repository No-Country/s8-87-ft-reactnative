import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import StyledTextInput from "../components/UI/inputs/StyledTextInput.jsx";
import StyledSubmitButton from "../components/UI/buttons/StyledSubmitButton.jsx";
import TopBar from "../components/UI/TopBar.jsx";
import { auth, getUserInfo } from "../firebase/firebase.js";
import { UserContext } from "../context/UserContext.jsx";
import Loader from "../components/Loader/Loader.jsx";

const validationSchema = Yup.object({
  email: Yup.string().email("Email inválido").required("Email requerido"),
  password: Yup.string()
    .trim(6, "Constraseña muy corta")
    .required("Contraseña requerida"),
});

const LogIn = (props) => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const userInfo = {
    email: "",
    password: "",
  };

  const getData = async () => {
    try {
      dataUser = await getUserInfo(auth.currentUser?.uid);
      setUser(dataUser);
    } catch (error) {}

    setLogin(true);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && login) {
        props.navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, [login]);

  const handleSignIn = (values) => {
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        setLoading(true);
        //  const user = userCredential.user;
        getData();
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.botonera}>
        <TopBar {...props} section="login" />
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View style={styles.innerContainer}>
          <Formik
            initialValues={userInfo}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSignIn(values);
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
              const { email, password } = values;
              return (
                <>
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
                      title="INGRESAR"
                    />
                  </View>
                </>
              );
            }}
          </Formik>
        </View>
      )}
    </View>
  );
};

export default LogIn;

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
