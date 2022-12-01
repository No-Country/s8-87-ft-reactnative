import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { palette } from '../utils/palette'

export default function UserProfile({route}) {
    console.log(route)
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.firstLetterContainer}>
                <Text style={styles.firstLetter}>{route.params.name[0]}</Text>
            </View>
            <View style={styles.nameContainer}>            
                <Text style={styles.name}>{route.params.name}</Text>
                <Text style={styles.city}>{route.params.city}</Text>
            </View>            
        </View>
        <Image style={styles.img} source={require("../assets/images/user-icon.jpg")}/>
        <View style={styles.textContainer}>
            <Text style={styles.profesionalProfile}>PERFIL PROFESIONAL</Text>
            <Text style={styles.tags}>Modelo - Actriz - Influencer</Text>
            <Text style={styles.aboutMeTitle}>Acerca de mi:</Text>
            <Text style={styles.aboutMe}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus neque pariatur quam sed ut eligendi molestiae atque voluptatibus explicabo nam dolorum, eveniet fugiat optio quia. Facilis odit accusamus quas eius.</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Seguir Buscando</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.button2Text}>Contactar</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#E7E0EC",
        width: "90%",
        height: 510,
        alignSelf: "center",
        borderRadius: 12,
        flexDirection: "column",
        marginTop: 24,
    },
    header:{
        flexDirection: "row",
        height: 72,
        width: "100%",
    },
    firstLetterContainer:{
        backgroundColor: palette.AuraOrange,
        width: 40,
        height:40,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 16,
    },
    firstLetter:{
        fontSize:16,
        color: "#FFFBFE",
        fontWeight: "500",
    },
    nameContainer:{
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "flex-start",
        
    },
    name:{
        fontWeight: "500",
        fontSize: 16,
        color:"#1C1B1F",
        marginBottom: 4,

    },
    city:{
        fontWeight: "400",
        fontSize: 14,
        color:"#1C1B1F",
    },
    img:{
        width: "100%",
        height:155,
    },
    textContainer:{
        padding: 16,
    },
    profesionalProfile:{
        fontWeight:"400",
        fontSize: 16,
        color: "#49454F",
    },
    tags:{
        fontWeight:"400",
        fontSize: 14,
        color: "#49454F",
        marginBottom: 32,
    },
    aboutMeTitle:{
        fontWeight: "500",
        color:"black",
        marginBottom: 4,
    },
    aboutMe:{
        color: "#49454F",
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent: "flex-end",
        padding: 16,
    },
    button:{
        height: 40,
        width: 155,
        borderRadius: 100,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#79747E",
        justifyContent:"center",
        alignItems: "center",
        marginRight: 10,
    },
    buttonText:{
        fontSize: 14,
        fontWeight:"500",
        color:palette.AuraOrange,
    },
    button2:{
        height: 40,
        width: 111,
        borderRadius: 100,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: palette.AuraOrange,
    },
    button2Text:{
        fontSize: 14,
        fontWeight:"500",
        color:"#FFFFFF",
    },

})