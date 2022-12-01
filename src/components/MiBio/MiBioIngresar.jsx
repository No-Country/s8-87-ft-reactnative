import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { UserContext } from "../../context/UserContext.jsx";
import { auth, updateUserInfo } from "../../firebase/firebase.js";
import StyledTextInput from "../UI/inputs/StyledTextInput.jsx";
import StyledTextArea from "../UI/inputs/StyledTextArea.jsx";
import StyledSubmitButton from "../UI/buttons/StyledSubmitButton.jsx";

const validationSchema = Yup.object({
  name: Yup.string().min(3, "Nombre Inválido").required("Nombre requerido"),
  lastname: Yup.string()
    .min(3, "Apellido Inválido")
    .required("Apellido requerido"),
  bio: Yup.string(),
});

const MiBioIngresar = () => {
  const { user, setUser } = useContext(UserContext);
  const userInfo = {
    name: user.name,
    lastname: user.lastname,
    bio: user.bio,
  };

  const handleUpdateUser = (values) => {
    console.log("in");
    const data = {
      name: values.name,
      lastname: values.lastname,
      bio: values.bio,
    };
    updateUserInfo(auth.currentUser?.uid, data);
    console.log(user);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("SUB");
          handleUpdateUser(values);
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
          const { name, lastname, bio } = values;
          return (
            <>
              <StyledTextInput
                value={name}
                error={touched.name && errors.name}
                placeholder={user.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
              />
              <StyledTextInput
                value={lastname}
                error={touched.lastname && errors.lastname}
                placeholder={user.lastname}
                onChangeText={handleChange("lastname")}
                onBlur={handleBlur("lastname")}
              />
              <StyledTextArea
                value={bio}
                error={touched.bio && errors.bio}
                placeholder={user.bio || "Escribe tu bio."}
                onChangeText={handleChange("bio")}
                onBlur={handleBlur("bio")}
              />
              <View style={styles.botones}>
                <StyledSubmitButton
                  submitting={isSubmitting}
                  onPress={handleSubmit}
                  title="ACTUALIZAR DATOS"
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default MiBioIngresar;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 50 },
  botones: {
    padding: 0,
    marginBottom: 10,
    marginTop: 20,
  },
});
