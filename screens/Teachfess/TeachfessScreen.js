import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const TechfessScreen = () => {
    const Navigation = useNavigation();
  return (
    <View>
      <Text>TechfessScreen</Text>
    </View>
  )
}

export default TechfessScreen