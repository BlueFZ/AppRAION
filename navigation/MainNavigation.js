import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/Auth/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import ForgotScreen from "../screens/Auth/ForgotScreen";
import NotificationScreen from "../screens/Notification/NotificationScreen";
import EducationScreen from "../screens/Edukasi/EducationScreen";
import EventScreen from "../screens/Event/EventScreen";
import TeachfessScreen from "../screens/Teachfess/TeachfessScreen";
import ProfileScreen from "../screens/Teachfess/ProfileScreen";
import ChatScreen from "../screens/Teachfess/ChatScreen";
import LombaScreen from "../screens/Event/LombaScreen";
import WebinarScreen from "../screens/Event/WebinarScreen";
import TabNavigation from "./TabNavigation";
import TipsScreen from "../screens/Edukasi/TipsScreen";
import SearchScreen from "../screens/SearchScreen";
import ExampleEventScreen from "../screens/Event/ExampleEventScreen";

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#31A0E8",
      background: "#fff",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          options={{
            headerShown: false,
          }}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="ForgotScreen"
          options={{
            headerShown: false,
          }}
          component={ForgotScreen}
        />
        <Stack.Screen
          name="NotificationScreen"
          options={{
            headerShown: true,
          }}
          component={NotificationScreen}
        />
        <Stack.Screen
          name="EducationScreen"
          options={{
            headerShown: false,
          }}
          component={EducationScreen}
        />
        <Stack.Screen
          name="TeachfessScreen"
          options={{
            headerShown: true,
          }}
          component={TeachfessScreen}
        />
        <Stack.Screen
          name="ProfileScreen"
          options={{
            headerShown: true,
          }}
          component={ProfileScreen}
        />
        <Stack.Screen
          name="ChatScreen"
          options={{
            headerShown: true,
          }}
          component={ChatScreen}
        />

        <Stack.Screen
          name="TabNavigation"
          options={{
            headerShown: false,
          }}
          component={TabNavigation}
        />
        <Stack.Screen
          name="TipsScreen"
          options={{
            headerShown: false,
          }}
          component={TipsScreen}
        />
        <Stack.Screen
          name="SearchScreen"
          options={{
            headerShown: false,
          }}
          component={SearchScreen}
        />
        <Stack.Screen
          name="ExampleEventScreen"
          options={{
            headerShown: false,
          }}
          component={ExampleEventScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
