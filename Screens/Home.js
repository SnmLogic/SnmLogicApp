import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./../Components/Home/Header";
import TodayTask from "./../Components/Home/TodayTask";
import Banner from "./../Components/Home/Banner";
import Advanced from "../Components/Home/Advanced";

export default function Home({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#6532F6",
        paddingTop: 30,
        paddingHorizontal: 20,
      }}
    >
      <Header />
      <TodayTask navigation={navigation} />
      <Banner />
      <Advanced navigation={navigation} />

      <StatusBar backgroundColor="#6532F6" style="light" />
    </View>
  );
}
