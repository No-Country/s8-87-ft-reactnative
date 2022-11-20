import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

import { palette } from '../../utils/palette'


export function SquareButton(props) {
  return (
    <Pressable onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button:{
        color: palette.AuraOrange,
        alignSelf: "center",
        justifyContent:"center",
        alignItems:"center",
        height: 36,
        width:"100%",
        borderColor: palette.AuraOrange,
        borderWidth:2,
        backgroundColor: "#DAD5D1",
    },
    text: {
      textAlign:"center",
      color: palette.AuraOrange,
      fontSize: 14,
      lineHeight:19,
      fontWeight:"500"
    }
})