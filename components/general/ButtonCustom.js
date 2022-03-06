import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

const ButtonCustom = (props) => {
  return (
    <View style={[tw` items-center`]}>
      <TouchableOpacity
        style={[
          tw`border border-gray-500 flex-wrap items-baseline rounded-md px-6 py-1 `,
        ]}
      >
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonCustom;
