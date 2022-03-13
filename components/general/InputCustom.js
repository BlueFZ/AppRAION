import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
const InputCustom = (props) => {
  return (
    <View style={[props.style]}>
      <Text>{props.title}</Text>
      <View style={[tw`flex-row items-center`]}>
        {props.icon && (
          <MaterialIcon
            name={props.icon}
            style={[tw`absolute right-5 text-gray-500 shadow-lg `]}
            size={20}
          />
        )}
        <TextInput
          style={[
            tw`w-full border-2 border-gray-300 my-2 rounded-md px-4 py-2 shadow-md bg-white`,
          ]}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </View>
  );
};

export default InputCustom;
