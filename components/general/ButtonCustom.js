import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

const ButtonCustom = (props) => {
  return (
    <TouchableOpacity
      style={[
        tw`  flex-wrap items-baseline rounded-md px-6 py-3  bg-white`,
        props.style,
      ]}
      onPress={() => props.onPress && props.onPress()}
    >
      <Text style={[tw`text-center w-full font-bold`, props.styleText]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
