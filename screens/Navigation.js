import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "./Homescreen";
import AddPostScreen from "./AddPostScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import SetUsernamePfp from "./SetUsernamePfp";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Homescreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="Homescreen" component={Homescreen}></Stack.Screen>
      <Stack.Screen
        name="AddPostScreen"
        component={AddPostScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}></Stack.Screen>
      <Stack.Screen
        name="SetInfoScreen"
        component={SetUsernamePfp}
      ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);
