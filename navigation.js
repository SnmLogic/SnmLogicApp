import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Welcome from "./Screens/Welcome";
import Home from "./Screens/Home";
import Python from "./Screens/Lang/Python";
import ReactJs from "./Screens/Lang/ReactJs";
import MongoDB from "./Screens/Lang/MongoDB";
import C from "./Screens/Lang/C";
import Java from "./Screens/Lang/Java";
import Ts from "./Screens/Lang/Ts";

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

        <Stack.Screen name="PythonScreen" component={Python} />
        <Stack.Screen name="ReactScreen" component={ReactJs} />
        <Stack.Screen name="MongoDbScreen" component={MongoDB} />
        <Stack.Screen name="CScreen" component={C} />
        <Stack.Screen name="JavaScreen" component={Java} />
        <Stack.Screen name="TsScreen" component={Ts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
