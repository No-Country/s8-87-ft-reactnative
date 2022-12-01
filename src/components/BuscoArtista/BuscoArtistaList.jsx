import { View, Text, FlatList } from 'react-native'
import React from 'react'
import TopArtistaCard from './TopArtistaCard'

export default function BuscoArtistaList() {
    const data = [
        {
            profilePic:"../../assets/images/user-icon.jpg",
            name: "Sofia Cuevas",
            city: "Buenos Aires",
            id: 1,
        },
        {
            profilePic:"../../assets/images/user-icon.jpg",
            name: "Roberth Lopez",
            city: "Caracas",
            id: 2,
        },
        {
            profilePic:"../../assets/images/user-icon.jpg",
            name: "Eyla Alcala",
            city: "Medellín",
            id: 3,
        },
        {
            profilePic:"../../assets/images/user-icon.jpg",
            name: "Ruben Eduardo",
            city: "Bogota",
            id: 4,
        },
        {
            profilePic:"../../assets/images/user-icon.jpg",
            name: "Eyla Alcala",
            city: "Medellín",
            id: 5,
        },
        {
            profilePic:"../../assets/images/user-icon.jpg",
            name: "Eyla Alcala",
            city: "Medellín",
            id: 6,
        },
        
    ]
  return (
    <FlatList 
        style={{marginBottom: 160}}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <TopArtistaCard data={item}/>}
    />
  )
}