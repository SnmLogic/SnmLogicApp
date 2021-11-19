import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function Ts() {
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
    <Text style={{ fontSize: 46, color: "#fff" }}>TypeScript</Text>
    <Text
      style={{
        textAlign: "center",
        fontSize: 15,
        color: "#fff",
        paddingHorizontal: 10,
        marginVertical: 50,
      }}
    >
      TypeScript is a programming language developed and maintained by
      Microsoft. It is a strict syntactical superset of JavaScript and adds
      optional static typing to the language. ... TypeScript may be used to
      develop JavaScript applications for both client-side and server-side
      execution (as with Node. js or Deno).
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
