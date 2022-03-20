import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "../../lib/tailwind";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Styles from "../../styles/Global";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "../../constans/Icons";
import Images from "../../constans/Images";
import HeaderSection from "../../components/header/HeaderSection";
import ItemOnce from "../../components/tren/ItemOnce";

const RenderHeader = () => {
  const Navigation = useNavigation();
  return (
    <View style={[tw`flex-row justify-between my-5 items-center`]}>
      <TouchableOpacity onPress={() => Navigation.goBack()}>
        <Image
          source={Icons.ArrowRight}
          style={[{ transform: [{ rotate: "180 deg" }] }]}
        />
      </TouchableOpacity>
      <Text style={[tw`font-bold text-xl`]}>TeachFess</Text>
      <TouchableOpacity
        onPress={() => Navigation.navigate("NotificationScreen")}
      >
        <Image source={Icons.Notification} />
      </TouchableOpacity>
    </View>
  );
};

const RenderSearch = () => {
  const Navigation = useNavigation();
  return (
    <View
      style={[tw`flex-row items-center bg-gray-200 px-2 my-2 rounded-full`]}
    >
      <Image source={Icons.Search} />
      <TextInput placeholder="Cari tutor" style={[tw`ml-2`]} />
    </View>
  );
};
const RenderType = () => {
  const [type, setType] = useState(0);
  const Badge = (props) => {
    return (
      <TouchableOpacity
        style={[
          tw.style(
            `bg-gray-50 px-5 rounded-full border border-primary mr-1`,
            type == props.type ? "bg-primary " : "bg-gray-50 "
          ),
        ]}
        onPress={() => setType(props.type)}
      >
        <Text
          style={[
            tw.style(
              type == props.type
                ? "text-white font-bold "
                : "text-black font-medium "
            ),
          ]}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[tw`flex-row my-5`]}
    >
      <Badge text="Semua" type={0} />
      <Badge text="UI/UX" type={1} />
      <Badge text="Competitive Progamming" type={2} />
    </ScrollView>
  );
};
const RenderChat = (props) => {
  return (
    <TouchableOpacity
      style={[tw`shadow-md rounded-md  bg-primary my-2 flex-row items-center `]}
    >
      <View
        style={[
          tw`shadow-md rounded-md bg-white px-3 py-2 flex-row items-center flex-1 `,
        ]}
      >
        <Image source={props.image} style={[tw`w-16 h-20 rounded-lg mr-5`]} />
        <View>
          <Text style={[tw`font-bold text-lg`]}>{props.name}</Text>
          <Text>Universitas Brawijaya, S.Kom</Text>
          <Text>Mata pelajaran : Matematika</Text>
          <Text>
            <Image source={Icons.Heart_half} /> 99% Disukai
          </Text>
        </View>
      </View>
      <View style={[tw`mx-2 items-center bg-white p-1 rounded-lg `]}>
        <Image source={Icons.Messages2} />
      </View>
    </TouchableOpacity>
  );
};
const TeachfessScreen = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`flex-1`]}>
      <View style={Styles.container}>
        <RenderHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.container}>
          <RenderSearch />
          <RenderType />
          <RenderChat image={Images.Chat1} name="Shin Ryujin" />
          <RenderChat image={Images.Chat2} name="Kim Minjuu" />
          <RenderChat image={Images.Chat3} name="Chou Tzuyu" />
          <RenderChat image={Images.Chat4} name="Bae Joo-hyun" />
          <RenderChat image={Images.Chat1} name="Shin Ryujin" />
          <RenderChat image={Images.Chat2} name="Kim Minjuu" />
          <RenderChat image={Images.Chat3} name="Chou Tzuyu" />
          <RenderChat image={Images.Chat4} name="Bae Joo-hyun" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TeachfessScreen;
