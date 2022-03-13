import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  const Navigation = useNavigation();
  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  );
};

export default ChatScreen;
