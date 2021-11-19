import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function Java() {
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
    <Text style={{ fontSize: 46, color: "#fff" }}>Java</Text>
    <Text
      style={{
        textAlign: "center",
        fontSize: 15,
        color: "#fff",
        paddingHorizontal: 10,
        marginVertical: 50,
      }}
    >
      Printable Version What is Java technology and why do I need it? Java is a
      programming language and computing platform first released by Sun
      Microsystems in 1995. It has evolved from humble beginnings to power a
      large share of today’s digital world, by providing the reliable platform
      upon which many services and applications are built. New, innovative
      products and digital services designed for the future continue to rely on
      Java, as well. There are many applications and even some websites that
      will not function unless you have Java installed. Java.com, this website,
      is intended for consumers who require Java for their desktop applications
      – specifically applications targeting Java 8. Developers as well as users
      that would like to learn Java programming should visit the dev.java
      website instead and business users should visit oracle.com/java for more
      information
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
