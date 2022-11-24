import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import TopBar from '../UI/TopBar';
import StyledButton from '../UI/buttons/StyledButton';

export default function SubirExperiencia(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <Text>Empresa</Text>
        <View style={styles.inputGroup}>            
          <TextInput
            style={styles.inputText}
            onChangeText={(value) => console.log(value)}
          />
        </View>
        <Text>Rol desempeñado</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.inputText}
            onChangeText={(value) => console.log(value)}
          />
        </View>
        <Text>Tipo de Experiencia</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.inputText}
            onChangeText={(value) => console.log(value)}
          />
        </View>
        <Text>Fecha de Estreno</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.inputText}
            onChangeText={(value) => console.log(value)}
          />
        </View>
        <View style={styles.botones}>
          <StyledButton
            name="Actualizar"
            
            {...props}
            fill
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 0 },
    innerContainer: { flex: 1, padding: 35 },
    inputGroup: {
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      height: 30
    },
    botones: {
      padding: 0,
      marginBottom: 15,
    },
    botonera: {
      flexDirection: "row",
    },
    inputText:{
        fontSize:16
    }
  });