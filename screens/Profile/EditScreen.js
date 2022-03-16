import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabCustom from "../../components/header/HeaderTabCustom";
import Styles from "../../styles/Global";
import Images from "../../constans/Images";
import tw from "../../lib/tailwind";
import HeaderSection from "../../components/header/HeaderSection";
import Icons from "../../constans/Icons";
import ItemOnce from "../../components/tren/ItemOnce";
import { useNavigation } from "@react-navigation/native";
import InputCustom from "../../components/general/InputCustom";
import { CheckBox } from "react-native-elements";
import ButtonCustom from "../../components/general/ButtonCustom";
import PickerCustom from "../../components/general/PickerCustom";
import GradueItem from "../../constans/GradueItem";
const RenderProfile = () => {
  const Navigation = useNavigation();
  return (
    <View>
      <View style={[tw`h-full w-full absolute elevation-0`]}>
        <View>
          <Image source={Images.ProfileHeader} style={[tw`w-full h-28`]} />
          <TouchableOpacity style={[tw`absolute right-0 m-2`]}>
            <Image source={Icons.Cam} />
          </TouchableOpacity>
        </View>

        <View style={[tw`bg-[#C8F7FA] w-full h-5/12  shadow-lg`]} />
      </View>
      <View
        style={[
          Styles.container,
          tw`elevation-1 flex-row items-center justify-between mt-16 mb-4`,
        ]}
      >
        <View>
          <View>
            <Image source={Images.User} style={[tw`w-18 h-18 rounded-full`]} />
            <TouchableOpacity
              style={[
                tw`absolute items-center justify-center bg-opacity-25 w-18 h-18 rounded-full bg-white `,
              ]}
            >
              <Image source={Icons.Cam} />
            </TouchableOpacity>
          </View>
          <Text style={[tw`font-bold`]}>Ibnu Putra</Text>
          <Text style={[tw`text-gray-500 font-bold text-xs`]}>
            @mas_ibnu123
          </Text>
          <Text style={[tw` font-bold text-xs`]}>Universitas Brawijaya</Text>
        </View>
      </View>
    </View>
  );
};
const RenderLabel = (props) => {
  return (
    <View
      style={[
        tw`flex-row px-2 py-1 items-center self-start my-1 rounded-full shadow-md`,
        { backgroundColor: props.color },
      ]}
    >
      <Image style={[tw`mr-1`]} source={props.icon} />
      <Text>{props.title}</Text>
    </View>
  );
};
const EditScreen = () => {
  const [check, setCheck] = useState(0);
  return (
    <SafeAreaView style={[tw`flex-1`]}>
      <View style={[Styles.container]}>
        <HeaderTabCustom title="Edit Profil" />
      </View>
      <ScrollView>
        <RenderProfile />
        <View style={[Styles.container]}>
          <View style={[tw`mx-5 my-2`]}>
            <InputCustom title="Nama Lengkap" />
            <InputCustom title="Nama Pengguna" />
            <InputCustom title="Email" />
            <PickerCustom
              title="Jenjang pendidikan"
              placeholder="SMP/SMA/Pendidikan Tinggi/Lainnya"
              data={GradueItem}
            />
            <InputCustom title="Nama Univ" />

            <ButtonCustom
              title="Simpan"
              style={[tw`bg-primary my-5 mx-12 py-2`]}
              styleText={[tw`text-white`]}
              // onPress={() => Navigation.navigate("LoginScreen")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditScreen;
