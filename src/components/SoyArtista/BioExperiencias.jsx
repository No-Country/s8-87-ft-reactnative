import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {SquareButton} from '../Ui/Buttons'

export default function BioExperiencias() {
  return (
    <View  style={styles.container}>
      <View style={styles.buttonContainer}>
      <SquareButton style={styles.buttons} text={"MI BIO"} onPress={() => console.log("hola")}/>        
      </View>
        
        <SquareButton text={"+ EXPERIENCIAS"} onPress={() => console.log("hola")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:156,
    },
    buttonContainer:{
      marginBottom:16
    }
})