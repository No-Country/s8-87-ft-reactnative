import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'

export default function SearchHeader() {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={require("../assets/icons/search-icon.png")}/>
      <TextInput 
        style={styles.textInput} 
        placeholder='Buscar'
        placeholderTextColor="white" 
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        
    },
    img:{
        width: 20,
        height: 20,
        marginTop: 5,
        marginLeft: 10,
    },
    textInput:{
        color: "white",
        paddingStart: 20,
        fontSize: 16,
        
    }
})