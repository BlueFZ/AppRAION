import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const EventScreen = () => {
    const Navigation = useNavigation();
  return (
    <View>
      <Text>EventScreen</Text>
    </View>
  )
}

export default EventScreen