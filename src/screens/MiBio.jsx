import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ProfilePictureName from '../components/SoyArtista/ProfilePictureName'


export default function MiBio() {
  return (
    <View style={styles.container}>
        <ProfilePictureName imgSize={{width:121, height: 121}} nameSize={25}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
})