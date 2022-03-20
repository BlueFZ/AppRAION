import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/Auth/LoginScreen";
import MainScreen from "../screens/Event/EventScreen";
import EditScreen from "../screens/Profile/EditScreen";
import WebinarScreen from "../screens/Event/WebinarScreen";
import LombaScreen from "../screens/Event/LombaScreen";
import TeachfessScreen from "../screens/Teachfess/TeachfessScreen";

const TeachfessNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TeachfessMainScreen"
        component={TeachfessScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WebinarScreen"
        component={WebinarScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LombaScreen"
        component={LombaScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default TeachfessNavigation;
