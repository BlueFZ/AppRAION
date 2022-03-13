import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const EventScreen = () => {
    const Navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => Navigation.navigate("LombaScreen")}>
        <Text>Lomba</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate("WebinarScreen")}>
        <Text>Webinar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EventScreen