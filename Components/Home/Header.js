import React from "react";
import { View, Text, Image } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <HeaderText />
      <HeaderImage />
    </View>
  );
}

const HeaderText = () => (
  <View>
    <Text style={{ fontSize: 31, color: "#fff", fontWeight: "bold" }}>
      Hi There !!
    </Text>
    <Text style={{ fontSize: 14, width: 183, color: "#fff" }}>
      Welcome, Today let’s learn Python
    </Text>
  </View>
);

const HeaderImage = () => (
  <View style={{ backgroundColor: "#fff", borderRadius: 100, elevation: 10 }}>
    <Image
      source={{
        uri: "https://cdn.discordapp.com/attachments/909650467771019294/910168079823147078/avatar.png",
      }}
      style={{
        width: 70,
        height: 70,
        borderRadius: 100,
        shadowRadius: 2,
        shadowOffset: {
          width: 5,
          height: -5,
        },
        shadowColor: "#000",
      }}
    />
  </View>
);
