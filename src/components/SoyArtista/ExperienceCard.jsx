import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ExperienceCard({item}) {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../../assets/images/experience-image.png")}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.verifiedContainer}>
                <Text style={styles.company}>{item.company}</Text>
                {item.verified && <Image source={require("../../assets/icons/verified-icon.png")}/>}
            </View>
            <Text style={styles.duration}>{item.duration}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginHorizontal: 13,
        marginBottom: 26
    },
    imageContainer:{
        width: "30%",
    },
    image:{
        borderRadius: 10,
        width: 100,
        height: 100,
    },
    textContainer:{
        width:"70%",
        flexDirection:"column",
        justifyContent: "space-evenly",
        paddingEnd: 15
    },
    title: {
        fontSize: 14,
        fontWeight: "500"
    },
    verifiedContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    company:{
        marginRight:5
    },
    duration: {
        fontSize: 12
    }
})