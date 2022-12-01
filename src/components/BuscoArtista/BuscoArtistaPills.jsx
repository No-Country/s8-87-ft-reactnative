import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { palette } from '../../utils/palette'

export default function BuscoArtistaPills() {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Actor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Actriz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Modelo</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.secondRow}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Cantante</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Influencer</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent: "center",
        width: "100%",
        marginVertical:14,
    },
    firstRow:{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 14,
    },
    secondRow:{
        flexDirection: "row",
        justifyContent: "center",
    },
    button:{
        backgroundColor: palette.AuraOrange,
        width: 73,
        height:32,
        borderRadius: 15,
        marginHorizontal:12,
        alignItems: "center",
        justifyContent:"center",
    },
    text:{
        color: "white",
        fontSize: 14,
        fontWeight: "400",
        textAlign:"center",
    }
})