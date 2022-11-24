import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ProfilePictureName from './ProfilePictureName'
import BioExperiencias from './BioExperiencias'

export default function SoyArtistaHeader() {
  return (
    <View style={styles.container}>
        <ProfilePictureName imgSize={{width:100, height: 100}} nameSize={20}/>
        <BioExperiencias />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems:"center",
        height: 200,
    }
})