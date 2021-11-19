import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ReactJs() {
  return (
    <View
      style={{
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6B2ECE",
        flex: 1,
      }}
    >
      <AboutText />
      <AboutButton />

      <StatusBar backgroundColor="#6B2ECE" style="light" />
    </View>
  );
}

const AboutText = () => (
  <>
    <Text style={{ fontSize: 46, color: "#fff" }}>React</Text>
    <Text
      style={{
        textAlign: "center",
        fontSize: 15,
        color: "#fff",
        paddingHorizontal: 10,
        marginVertical: 50,
      }}
    >
      React is a free and open-source front-end JavaScript library for building
      user interfaces based on UI components. It is maintained by Meta and a
      community of individual developers and companies. React can be used as a
      base in the development of single-page or mobile applications.
    </Text>
  </>
);

const AboutButton = () => (
  <TouchableOpacity
    onPress={() => console.log("Hi there")}
    style={{
      width: 310,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FF00C7",
      borderRadius: 100,
    }}
  >
    <Text style={{ color: "#fff", fontSize: 17 }}>Go To Official Website</Text>
  </TouchableOpacity>
);
