import { View, Text, TouchableOpacity } from "react-native";

import React from "react";
import { Icon } from "react-native-elements";
import tw from "../../lib/tailwind";
import { useNavigation } from "@react-navigation/native";

const HeaderCustom = (props) => {
  const Navigation = useNavigation();
  return (
    <View style={[tw`flex-row  items-center justify-between mt-5 mb-20`]}>
      <TouchableOpacity onPress={() => Navigation.goBack()}>
        <Icon name="chevron-left" />
      </TouchableOpacity>
      <Text style={[tw`text-2xl font-bold`]}>{props.title}</Text>
      <View />
    </View>
  );
};

export default HeaderCustom;
