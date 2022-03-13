import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const LombaScreen = () => {
    const Navigation = useNavigation();
  return (
    <View>
      <Text>LombaScreen</Text>
    </View>
  )
}

export default LombaScreen