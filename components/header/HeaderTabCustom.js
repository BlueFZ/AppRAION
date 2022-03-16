import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import Icons from "../../constans/Icons";
import { useNavigation } from "@react-navigation/native";

const HeaderTabCustom = (props) => {
  const navigation = useNavigation();
  return (
    <View style={[tw`flex-row items-center my-2`]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={Icons.ArrowRight}
          style={[tw`mr-5`, { transform: [{ rotate: "180deg" }] }]}
        />
      </TouchableOpacity>
      <Text style={[tw`text-lg font-bold`]}>{props.title}</Text>
    </View>
  );
};

export default HeaderTabCustom;
