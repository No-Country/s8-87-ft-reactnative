import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { SelectList } from 'react-native-dropdown-select-list'
import StyledSubmitButton from '../UI/buttons/StyledSubmitButton';
import StyledTextInput from '../UI/inputs/StyledTextInput';
import ProfilePictureName from './ProfilePictureName';
import { palette } from '../../utils/palette';
import DatePicker from 'react-native-datepicker';


const SubirExperiencia = (props) => {

  const [selected, setSelected] = useState("");

  const data = [
    {key:'Audiovisual', value:'Audiovisual'},
    {key:'Teatral', value:'Teatral'},
]

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
          return console.log(values)
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
          const { empresa, rol, tipo, fecha, date } = values;
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
              {/* <StyledTextInput
                value={tipo}
                error={touched.tipo && errors.tipo}
                placeholder="Tipo de Experiencia"
                onChangeText={handleChange("tipo")}
                onBlur={handleBlur("tipo")}
              /> */}
              <SelectList 
                boxStyles={styles.input}
                inputStyles={{fontSize: 16, color: "#212121",}}
                setSelected={setSelected} 
                data={data} 
                value={tipo}
                error={touched.tipo && errors.tipo}
                placeholder='Tipo de Experiencia'
                onSelect={handleChange("tipo")}
                search={false}
              />
              <StyledTextInput
                value={fecha}
                error={touched.fecha && errors.fecha}
                placeholder="Fecha de Estreno"
                onChangeText={handleChange("fecha")}
                onBlur={handleBlur("fecha")}
              />
              {/* <DatePicker
            style={{ width: 200 }}
            date={date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate="2099-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              setFieldValue('date', date);
            }}
          /> */}
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