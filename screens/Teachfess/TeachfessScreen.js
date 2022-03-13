import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const TechfessScreen = () => {
    const Navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => Navigation.navigate("ProfileScreen")}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate("ChatScreen")}>
        <Text>Chat</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TechfessScreen
