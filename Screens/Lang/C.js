import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function C() {
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
    <Text style={{ fontSize: 46, color: "#fff" }}>C</Text>
    <Text
      style={{
        textAlign: "center",
        fontSize: 15,
        color: "#fff",
        paddingHorizontal: 10,
        marginVertical: 50,
      }}
    >
      C is a general-purpose, procedural computer programming language
      supporting structured programming, lexical variable scope, and recursion,
      with a static type system. By design, C provides constructs that map
      efficiently to typical machine instructions.
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
