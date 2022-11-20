import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SoyArtistaHeader from '../components/SoyArtista/SoyArtistaHeader'
import ExperienceCard from '../components/SoyArtista/ExperienceCard'

export default function SoyArtista() {
  return (
    <View style={styles.container}>
      <SoyArtistaHeader />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#DAD5D1"
  }
})