import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icons from "../../constans/Icons";
import tw from "../../lib/tailwind";

const HeaderSection = (props) => {
  return (
    <View style={[tw`flex-row my-5 justify-between items-center`]}>
      <Text style={[tw`text-secondary text-lg font-bold`]}>{props.text}</Text>
      <TouchableOpacity>
        <Image source={Icons.ArrowRoundRight} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSection;
