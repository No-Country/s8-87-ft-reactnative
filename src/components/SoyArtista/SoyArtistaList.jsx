import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import SoyArtistaHeader from "./SoyArtistaHeader";

export default function SoyArtistaList() {
  const experience = [
    {
      title: "1 Disney Jr. en el GRAN REX",
      image: "../../assets/images/experience-image.png",
      company: "Disney Theatrical",
      duration: "4 meses",
      verified: false,
      id: "0",
    },
    {
      title: "2 Disney Jr. en el GRAN REX",
      image: "../../assets/images/experience-image.png",
      company: "Disney Theatrical",
      duration: "4 meses",
      verified: true,
      id: "1",
    },
    {
      title: "3 Disney Jr. en el GRAN REX",
      image: "../../assets/images/experience-image.png",
      company: "Disney Theatrical",
      duration: "4 meses",
      verified: false,
      id: "2",
    },
    {
      title: "4 Disney Jr. en el GRAN REX",
      image: "../../assets/images/experience-image.png",
      company: "Disney Theatrical",
      duration: "4 meses",
      verified: false,
      id: "3",
    },
    {
      title: "5 Disney Jr. en el GRAN REX",
      image: "../../assets/images/experience-image.png",
      company: "Disney Theatrical",
      duration: "4 meses",
      verified: false,
      id: "4",
    },
    {
      title: "6 Disney Jr. en el GRAN REX",
      image: "../../assets/images/experience-image.png",
      company: "Disney Theatrical",
      duration: "4 meses",
      verified: false,
      id: "5",
    },
  ];

  return (
    <FlatList
      style={{ marginBottom: 200 }}
      data={experience}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ExperienceCard item={item} />}
    />
  );
}
