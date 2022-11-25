import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import StyledSubmitButton from '../UI/buttons/StyledSubmitButton';
import StyledTextInput from '../UI/inputs/StyledTextInput';
import ProfilePictureName from './ProfilePictureName';
import { palette } from '../../utils/palette';


const SubirExperiencia = (props) => {
  const handleAct = (values) => {
    console.log(values)
  };
const validationSchema = Yup.object({
  empresa: Yup.string().required("Empresa requerida"),
  rol: Yup.string().required("Rol requerido"),
  tipo: Yup.string().required("El tipo de experiencia es requerido"),
  fecha: Yup.string().required("La fecha es requerida"),
});
const userInfo = {
  empresa: "",
  rol: "",
  tipo: "",
  fecha: "",
};

return (
  <View style={styles.container}>
    <View style={styles.profileContainer}>
      <ProfilePictureName imgSize={{width:60, height:60}} nameSize={20} displayText={"none"}/>
    </View>
    <View style={styles.innerContainer}>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleAct(values);
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
          const { empresa, rol, tipo, fecha } = values;
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
                secureTextEntry
                value={rol}
                error={touched.rol && errors.rol}
                placeholder="Rol desempeñado"
                onChangeText={handleChange("rol")}
                onBlur={handleBlur("rol")}
              />
              <StyledTextInput
                secureTextEntry
                value={tipo}
                error={touched.tipo && errors.tipo}
                placeholder="Tipo de Experiencia"
                onChangeText={handleChange("tipo")}
                onBlur={handleBlur("tipo")}
              />
              <StyledTextInput
                secureTextEntry
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
    </View>
  </View>
);
};

export default SubirExperiencia;

const styles = StyleSheet.create({
container: { flex: 1, padding: 0 },
profileContainer : {
  backgroundColor: palette.AuraOrange,
  height: 100,
  justifyContent: "center",
  alignItems: "center"
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
botonera: {
  flexDirection: "row",
},
});