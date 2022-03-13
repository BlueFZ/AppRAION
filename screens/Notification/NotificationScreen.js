import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const NotificationScreen = () => {
    const Navigation = useNavigation();
  return (
    <View>
      <Text>NotificationScreen</Text>
    </View>
  )
}

export default NotificationScreen