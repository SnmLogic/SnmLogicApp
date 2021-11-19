import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function MongoDB() {
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
    <Text style={{ fontSize: 46, color: "#fff" }}>MongoDB</Text>
    <Text
      style={{
        textAlign: "center",
        fontSize: 15,
        color: "#fff",
        paddingHorizontal: 10,
        marginVertical: 50,
      }}
    >
      MongoDB is a source-available cross-platform document-oriented database
      program. Classified as a NoSQL database program, MongoDB uses JSON-like
      documents with optional schemas. MongoDB is developed by MongoDB Inc. and
      licensed under the Server Side Public License.
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
