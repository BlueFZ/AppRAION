//<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
//=======
import { StatusBar } from "expo-status-bar";
import react from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import MainNavigation from "./navigation/MainNavigation";
//>>>>>>> 6db179c571ab9d323a6f9bfa65ff081a7d4174e6

const Stack = createNativeStackNavigator();

export default function App() {
  return <MainNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
