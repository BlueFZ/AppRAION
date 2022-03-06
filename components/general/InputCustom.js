import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

const InputCustom = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <TextInput
        style={[tw`w-full border-2 border-gray-500 my-2 rounded-md px-4 py-1`]}
        placeholder={props.placeholder}
      />
    </View>
  );
};

export default InputCustom;
