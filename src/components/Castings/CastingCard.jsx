import { View, Text, Image, StyleSheet, ScrollView, Button, Alert, TouchableOpacity, } from 'react-native'
import React from 'react'



const Castings = require('./BackEnd/castings.json');

export default function CastingCard() {
    return (
        <ScrollView>
            <View style={styles.main}>
                {
                    Castings.map((casting) => {
                        return (
                            <View style={styles.container}>
                                <View style={styles.heading}>
                                    <View style={styles.picContainer}>
                                        <Image style={styles.profilePic} source={{ uri: casting.profilePic }} />
                                    </View>
                                    <View>
                                        <Text style={styles.header}>{casting.title}</Text>
                                        <Text style={styles.location}>{casting.location}</Text>
                                    </View>
                                </View>
                                <View style={styles.body}>
                                    <Image style={styles.image} source={{ uri: casting.image }}/>
                                </View>
                                <View style={styles.footer}>
                                <View>
                                    <Text style={styles.title}>{casting.show}</Text>
                                    <Text style={styles.company}>{casting.company}</Text>
                                    <Text style={styles.duration}>{casting.date}</Text>
                                </View>
                                <View>
                                    <Text style={styles.description}>{casting.description}</Text>
                                </View>
                                </View>
                                <View style={styles.buttons}>
                                    <TouchableOpacity style={styles.btn} onPress={() => Alert.alert('Postulaste a este casting')}>
                                        <Text style={styles.buttonText}>Postular</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFEDEA",
    },
    container: {
        margin: 20,
        backgroundColor: "#FFFBFE",
        borderRadius: 10,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        width: 350,
    },
    heading: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
    },
    picContainer: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    profilePic: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
    },
    header: {
        marginBottom: 10,
        fontSize: 15,
        fontWeight: "500",
    },
    image: {
        width: "100%",
        height: 200,

        backgroundColor: "#ffff",
    },
    footer: {
        padding: 20,
    },

    company: {
        fontSize: 12,
        color: "#757575"
    },
    duration: {
        fontSize: 12,
    },
    description: {
        fontSize: 15,
        maxHeight: 40,
        overflow: "hidden",
        marginTop: 10,
    },
    buttons: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 20,
    },
    btn: {
        backgroundColor: "#B3282B",
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        width: 100,
        height: 40,
        alignItems: "center",
        color: "#ffff",
        justifyContent: "center",
    },
    buttonText: {
        color: "#ffff",
        fontSize: 15,
    },
})