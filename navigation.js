import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Welcome from "./Screens/Welcome";
import Home from "./Screens/Home";

const Stack = createStackNavigator();

const HeaderOptions = {
  headerShown: false,
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={HeaderOptions}
        gestureEnabled={true}
      >
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="HomeScreen" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
