import React from "react";
import { View, Text, Image } from "react-native";

export default function Banner() {
  return (
    <View
      style={{
        marginVertical: 30,
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "100%",
        height: 158,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <BannerText />
      <BannerImage />
    </View>
  );
}

const BannerText = () => (
  <View style={{ width: 125, marginLeft: 20 }}>
    <Text style={{ fontSize: 26 }}>Start Learning Today !!</Text>
  </View>
);

const BannerImage = () => (
  <View>
    <Image
      source={{
        uri: "https://cdn.discordapp.com/attachments/909650467771019294/910170704589246504/undraw_book_reading_kx9s.png",
      }}
      style={{ width: 193, height: 132, marginLeft: 15 }}
    />
  </View>
);
