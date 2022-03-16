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
import LombaScreen from "../screens/Event/Lomba/LombaScreen";
import WebinarScreen from "../screens/Event/Webinar/WebinarScreen";
import TabNavigation from "./TabNavigation";

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "rgb(255, 45, 85)",
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
            headerShown: true,
          }}
          component={EducationScreen}
        />
        <Stack.Screen
          name="EventScreen"
          options={{
            headerShown: true,
          }}
          component={EventScreen}
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
          name="LombaScreen"
          options={{
            headerShown: true,
          }}
          component={LombaScreen}
        />
        <Stack.Screen
          name="WebinarScreen"
          options={{
            headerShown: true,
          }}
          component={WebinarScreen}
        />
        <Stack.Screen
          name="TabNavigation"
          options={{
            headerShown: false,
          }}
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
