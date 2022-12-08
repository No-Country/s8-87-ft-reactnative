import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { SelectList } from "react-native-dropdown-select-list";
import StyledSubmitButton from "../UI/buttons/StyledSubmitButton";
import StyledTextInput from "../UI/inputs/StyledTextInput";
import ProfilePictureName from "./ProfilePictureName";
import { palette } from "../../utils/palette";
import DatePicker from "react-native-datepicker";
import { auth, db } from "../../firebase/firebase.js";
import { UserContext } from "../../context/UserContext";

const SubirExperiencia = (props) => {
  const [selected, setSelected] = useState("");
  const [expCreate, setExpCreate] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const data = [
    { key: "Audiovisual", value: "Audiovisual" },
    { key: "Teatral", value: "Teatral" },
  ];

  const handleAct = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    empresa: Yup.string().required("Empresa requerida"),
    rol: Yup.string().required("Rol requerido"),
    fecha: Yup.string().required("La fecha es requerida"),
  });
  const userInfo = {
    empresa: "",
    rol: "",
    fecha: "",
  };

  useEffect(() => {
    if (expCreate) {
      props.navigation.navigate("Home");
    }
  }, [expCreate]);

  const handleCreateExp = async (userId, values) => {
    const data = {
      empresa: values.empresa,
      rol: values.rol,
      fecha: values.fecha,
      idUser: userId,
    };
    try {
      await db
        .collection("experiencias")
        .doc(userId)
        .set(data)
        .then(setExpCreate(true));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <ProfilePictureName
          imgSize={{ width: 60, height: 60 }}
          nameSize={20}
          displayText={"none"}
        />
      </View>
      <ScrollView style={styles.innerContainer}>
        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleCreateExp(auth.currentUser?.uid, values);
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
            const { empresa, rol, fecha } = values;
            return (
              <>
                <StyledTextInput
                  value={empresa}
                  error={touched.empresa && errors.empresa}
                  placeholder="Empresa"
                  onChangeText={handleChange("empresa")}
                  onBlur={handleBlur("empresa")}
                />
                <StyledTextInput
                  value={rol}
                  error={touched.rol && errors.rol}
                  placeholder="Rol desempeñado"
                  onChangeText={handleChange("rol")}
                  onBlur={handleBlur("rol")}
                />

                <StyledTextInput
                  value={fecha}
                  error={touched.fecha && errors.fecha}
                  placeholder="Fecha de Estreno"
                  onChangeText={handleChange("fecha")}
                  onBlur={handleBlur("fecha")}
                />

                <View style={styles.botones}>
                  <StyledSubmitButton
                    submitting={isSubmitting}
                    onPress={handleSubmit}
                    title="Actualizar"
                  />
                </View>
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default SubirExperiencia;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 0 },
  profileContainer: {
    backgroundColor: palette.AuraOrange,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
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

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    height: 50,
    borderRadius: 4,
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 30,
  },
});
