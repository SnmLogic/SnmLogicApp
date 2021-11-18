import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./../Components/Home/Header";
import TodayTask from "./../Components/Home/TodayTask";
import Banner from "./../Components/Home/Banner";
import Advanced from "../Components/Home/Advanced";

export default function Home() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#853DFA",
        paddingTop: 30,
        paddingHorizontal: 20,
      }}
    >
      <Header />
      <TodayTask />
      <Banner />
      <Advanced />

      <StatusBar backgroundColor="#853DFA" style="light" />
    </View>
  );
}
