import React, { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { UserContext } from "../../context/UserContext.jsx";
import { auth, updateUserInfo } from "../../firebase/firebase.js";
import StyledTextInput from "../UI/inputs/StyledTextInput.jsx";
import StyledTextArea from "../UI/inputs/StyledTextArea.jsx";
import StyledCheckbox from "../UI/checkbox/StyledCheckbox.jsx";
import StyledSubmitButton from "../UI/buttons/StyledSubmitButton.jsx";

const validationSchema = Yup.object({
  name: Yup.string().min(3, "Nombre Inválido").required("Nombre requerido"),
  lastname: Yup.string()
    .min(3, "Apellido Inválido")
    .required("Apellido requerido"),
  bio: Yup.string(),
});

const MiBioIngresar = (props) => {
  const { user, setUser } = useContext(UserContext);
  const userInfo = {
    name: user.name,
    lastname: user.lastname,
    city: user.city,
    country: user.country,
    bio: user.bio,
    actriz: user.actriz,
    actor: user.actor,
    modelo: user.modelo,
    cantante: user.cantate,
    influencer: user.influencer,
  };

  const handleUpdateUser = (values) => {
    const data = {
      name: values.name,
      lastname: values.lastname,
      bio: values.bio,
      city: values.city,
      country: values.country,
      actriz: values.actriz || false,
      actor: values.actor || false,
      modelo: values.modelo || false,
      cantante: values.cantante || false,
      influencer: values.influencer || false,
    };
    setUser((user) => ({ ...user, ...data }));
    console.log("1");
    updateUserInfo(auth.currentUser?.uid, data).then(() => {
      console.log("2");
      props.navigation.navigate("Home");
    });
  };

  return (
    <ScrollView style={styles.container}>
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
          setFieldValue,
        }) => {
          const {
            name,
            lastname,
            city,
            country,
            bio,
            actriz,
            actor,
            modelo,
            cantante,
            influencer,
          } = values;
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
              <StyledTextInput
                value={city}
                error={touched.city && errors.city}
                placeholder={user.city || "Ciudad"}
                onChangeText={handleChange("city")}
                onBlur={handleBlur("city")}
              />
              <StyledTextInput
                value={country}
                error={touched.country && errors.country}
                placeholder={user.country || "País"}
                onChangeText={handleChange("country")}
                onBlur={handleBlur("country")}
              />
              <View style={styles.checkeBoxs}>
                <StyledCheckbox
                  name="actriz"
                  value={actriz}
                  checked={user.actriz}
                  onValueChange={() => setFieldValue("actriz", !actriz)}
                >
                  Actriz
                </StyledCheckbox>
                <StyledCheckbox
                  name="actor"
                  value={actor}
                  checked={user.actor}
                  onValueChange={() => setFieldValue("actor", !actriz)}
                >
                  Actor
                </StyledCheckbox>
                <StyledCheckbox
                  name="modelo"
                  value={modelo}
                  checked={user.modelo}
                  onValueChange={() => setFieldValue("modelo", !modelo)}
                >
                  Modelo
                </StyledCheckbox>
                <StyledCheckbox
                  name="cantante"
                  value={cantante}
                  checked={user.cantante}
                  onValueChange={() => setFieldValue("cantante", !cantante)}
                >
                  Cantante
                </StyledCheckbox>
                <StyledCheckbox
                  name="influencer"
                  value={influencer}
                  checked={user.influencer}
                  onValueChange={() => setFieldValue("influencer", !influencer)}
                >
                  Influencer
                </StyledCheckbox>
              </View>
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
    </ScrollView>
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
  checkeBoxs: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: 20,
  },
});
