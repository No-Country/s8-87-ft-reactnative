import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import TopArtistaCard from "./TopArtistaCard";
import { db } from "../../firebase/firebase.js";

export default function BuscoArtistaList() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const subscriber = db.collection("users").onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((documentSnapshot) => {
        data.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setUsers(data);
      setLoading(false);
    });

    return () => subscriber();
  }, []);

  const data = [
    {
      profilePic: "../../assets/images/user-icon.jpg",
      name: "Sofia Cuevas",
      city: "Buenos Aires",
      id: 1,
    },
    {
      profilePic: "../../assets/images/user-icon.jpg",
      name: "Roberth Lopez",
      city: "Caracas",
      id: 2,
    },
    {
      profilePic: "../../assets/images/user-icon.jpg",
      name: "Eyla Alcala",
      city: "Medellín",
      id: 3,
    },
    {
      profilePic: "../../assets/images/user-icon.jpg",
      name: "Ruben Eduardo",
      city: "Bogota",
      id: 4,
    },
    {
      profilePic: "../../assets/images/user-icon.jpg",
      name: "Eyla Alcala",
      city: "Medellín",
      id: 5,
    },
    {
      profilePic: "../../assets/images/user-icon.jpg",
      name: "Eyla Alcala",
      city: "Medellín",
      id: 6,
    },
  ];

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <FlatList
      style={{ marginBottom: 160 }}
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TopArtistaCard data={item} />}
    />
  );
}
