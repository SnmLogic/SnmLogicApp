import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function WelcomeButton({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("HomeScreen")}
      style={{
        backgroundColor: "#F82094",
        width: "90%",
        height: 54,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
      }}
    >
      <Text style={{ color: "#fff", fontSize: 21 }}>Get Started</Text>
    </TouchableOpacity>
  );
}
