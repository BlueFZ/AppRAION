import { View, Text, TouchableOpacity } from "react-native";

import React from "react";
import { Icon } from "react-native-elements";
import tw from "../../lib/tailwind";
import { useNavigation } from "@react-navigation/native";

const HeaderCustom = (props) => {
  const Navigation = useNavigation();
  return (
    <View style={[props.style]}>
      <View style={[tw`flex-row  items-center justify-start my-5 `]}>
        <TouchableOpacity
          style={[tw`mr-5 `]}
          onPress={() => Navigation.goBack()}
        >
          <Icon name="chevron-left" />
        </TouchableOpacity>
        <Text style={[tw`text-lg font-bold text-secondary`]}>
          {props.title}
        </Text>
      </View>
      <View style={[tw`w-full h-1 bg-gray-200`]} />
    </View>
  );
};

export default HeaderCustom;
