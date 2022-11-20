import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ProfilePictureName() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/images/user-icon.jpg") }/>
      <Text style={styles.text}>Lucia Muiño</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
       width: 130,
       fontFamily: 'Roboto',
       justifyContent: "center",
        alignItems:'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginBottom:5       
    },
    text: {
        fontSize: 20,
        color:"#757575",
        textAlign:"center",
        
    }
})