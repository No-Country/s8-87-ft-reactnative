import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import SoyArtistaHeader from '../components/SoyArtista/SoyArtistaHeader'
import ExperienceCard from '../components/SoyArtista/ExperienceCard'
import SoyArtistaList from '../components/SoyArtista/SoyArtistaList'

export default function SoyArtista() {
  return (
    <View style={styles.container}>
      <SoyArtistaList />    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#DAD5D1"
  }
})