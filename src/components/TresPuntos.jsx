import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import MenuComponent from "./MenuComponent";

export default function TresPuntos() {
  const [menu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    if (menu === false) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleMenu}>
        <Image
          style={styles.tresPuntosIcon}
          source={require("../assets/icons/3puntos-icon.png")}
        />
      </TouchableOpacity>
      {menu && <MenuComponent />}
    </View>
  );
}

const styles = StyleSheet.create({
  tresPuntosIcon: {
    width: 4.14,
    height: 15,
    marginRight: 15,
  },
});
