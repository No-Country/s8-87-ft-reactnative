import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import SoyArtistaHeader from './SoyArtistaHeader'

export default function SoyArtistaList() {

    const experience= [
        {
            title: "Disney Jr. en el GRAN REX",
            image: "../../assets/images/experience-image.png",
            company: "Disney Theatrical",
            duration: "4 meses",
            verified: false,
            id: "1",           
        },
        {
            title: "Disney Jr. en el GRAN REX",
            image: "../../assets/images/experience-image.png",
            company: "Disney Theatrical",
            duration: "4 meses",
            verified: true,
            id: "2",           
        },
        {
            title: "Disney Jr. en el GRAN REX",
            image: "../../assets/images/experience-image.png",
            company: "Disney Theatrical",
            duration: "4 meses",
            verified: false,
            id: "3",           
        },
        {
            title: "Disney Jr. en el GRAN REX",
            image: "../../assets/images/experience-image.png",
            company: "Disney Theatrical",
            duration: "4 meses",
            verified: false,
            id: "4",           
        },
        {
            title: "Disney Jr. en el GRAN REX",
            image: "../../assets/images/experience-image.png",
            company: "Disney Theatrical",
            duration: "4 meses",
            verified: false,
            id: "5",           
        },

    ]

  return (

    <FlatList 
        data={experience}
         keyExtractor={(item)=> item.id }
         renderItem={({item}) => <ExperienceCard item={item}/>}
         ListHeaderComponent={()=> <SoyArtistaHeader />}    
    />
  )
}