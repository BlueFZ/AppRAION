import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabCustom from "../../components/header/HeaderTabCustom";
import Styles from "../../styles/Global";
import Images from "../../constans/Images";
import tw from "../../lib/tailwind";
import HeaderSection from "../../components/header/HeaderSection";
import Icons from "../../constans/Icons";
import ItemOnce from "../../components/tren/ItemOnce";
import { useNavigation } from "@react-navigation/native";
const RenderProfile = () => {
  const Navigation = useNavigation();
  return (
    <View>
      <View style={[tw`h-full w-full absolute elevation-0`]}>
        <Image source={Images.ProfileHeader} style={[tw`w-full h-28`]} />
        <View style={[tw`bg-[#C8F7FA] w-full h-5/12  shadow-lg`]} />
      </View>
      <View
        style={[
          Styles.container,
          tw`elevation-1 flex-row items-center justify-between mt-16 mb-4`,
        ]}
      >
        <View>
          <Image source={Images.User} style={[tw`w-18 h-18 rounded-full`]} />
          <Text style={[tw`font-bold`]}>Ibnu Putra</Text>
          <Text style={[tw`text-gray-500 font-bold text-xs`]}>
            @mas_ibnu123
          </Text>
          <Text style={[tw` font-bold text-xs`]}>Universitas Brawijaya</Text>
        </View>
        <TouchableOpacity
          style={[tw`bg-primary px-3 py-2 rounded-lg elevation-10`]}
          onPress={() => Navigation.navigate("EditProfileScreen")}
        >
          <Text style={[tw`text-white font-bold`]}>Edit Profile</Text>
        </TouchableOpacity>
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
const MainScreen = () => {
  return (
    <SafeAreaView style={[tw`flex-1`]}>
      <View style={[Styles.container]}>
        <HeaderTabCustom title="Profil" />
      </View>
      <ScrollView>
        <RenderProfile />
        <View style={[Styles.container]}>
          <HeaderSection text="Event Saya" />
          <RenderLabel title="Terdaftar" icon={Icons.Ticket} color="#FED766" />
          <ItemOnce
            title="Premiere pro CC tutorial for beginner "
            tag="Webinar"
            date="Sel, 22 Mar 2022"
            amountUser="100.000"
            image={Images.Tren1}
            status={1}
          />
          <RenderLabel title="Tersimpan" icon={Icons.Like} color="#FF9DD8" />
          <ItemOnce
            title="Lomba mendapatkan hatimu"
            tag="Lomba"
            date="Sel, 22 Mar 2022"
            amountUser="100.000"
            image={Images.Tren2}
            status={2}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
