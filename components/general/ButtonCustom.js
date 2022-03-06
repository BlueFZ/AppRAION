import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

const ButtonCustom = (props) => {
  return (
    <TouchableOpacity
      style={[
        tw`border border-gray-500 flex-wrap items-baseline rounded-md px-6 py-1 shadow-lg`,
        props.style,
      ]}
      onPress={() => props.onPress()}
    >
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
