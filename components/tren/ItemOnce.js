import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import Icons from "../../constans/Icons";

const ItemOnce = (props) => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={[
        tw`flex-row p-5 items-center shadow-lg bg-white my-5 rounded-lg `,
      ]}
    >
      <Image
        source={props.image}
        style={[
          tw` rounded-lg mr-5  `,
          { width: width * 0.14, height: width * 0.18 },
        ]}
      />
      <View style={[tw`flex-1`]}>
        <Text style={[tw`underline`]}>{props.tag}</Text>
        <Text style={[tw`font-bold`]}>{props.title}</Text>
        <Text style={[tw``]}>{props.date}</Text>
        <View style={[tw`flex-row justify-between`]}>
          <Text style={[tw`items-center`]}>
            {" "}
            <Image source={Icons.Group} /> {props.amountUser} peserta
          </Text>
          {props.status == 1 && (
            <Text style={[tw`text-[#17DBE8] font-bold`]}>Terdaftar</Text>
          )}
          {props.status == 2 && (
            <Text style={[tw`text-[#FF099E] font-bold`]}>Tersimpan</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemOnce;
