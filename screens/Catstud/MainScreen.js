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
import React from "react";
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
  return (
    <View style={[tw`flex-row justify-between mt-5 mb-2 items-center`]}>
      <TouchableOpacity>
        <Image source={Icons.Profile} style={[{ tintColor: "black" }]} />
      </TouchableOpacity>
      <Text style={[tw`font-bold text-xl`]}>Chatstud</Text>
      <TouchableOpacity>
        <Image source={Icons.Notification} />
        <View
          style={[
            tw`h-2 w-2 bg-[#F84F31] rounded-full absolute -top-1 -right-1`,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const RenderSearch = () => {
  return (
    <TouchableOpacity
      style={[
        tw`flex-row justify-start my-2 items-center mx-5 p-2 bg-gray-100 rounded-full shadow-md `,
      ]}
    >
      <Image source={Icons.Search} />
      <Text style={[tw`text-gray-400 ml-2`]}>Cari Topik..</Text>
    </TouchableOpacity>
  );
};
const RenderMessage = () => {
  return (
    <View
      style={[
        tw`bg-white shadow-lg px-2 py-1 rounded-lg flex-row items-center justify-between my-2 mx-3`,
      ]}
    >
      <View style={[tw`flex-row items-center flex-1 `]}>
        <Image source={Icons.ProfileRounded} style={[tw`mr-2`]} />
        <View style={[tw``]}>
          <TextInput
            placeholder="Mulai ngobrol dengan teman kamu!"
            style={[tw`text-xs`]}
          />
          <View style={[tw`flex-row items-center`]}>
            <TouchableOpacity>
              <Image source={Icons.AddPoto} style={[tw`mr-2`]} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Icons.AddImage} style={[tw`mr-2`]} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Icons.AddEmoji} style={[tw`mr-2`]} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={[tw`rounded-full px-6 py-1 bg-primary `]}>
        <Text style={[tw`text-white font-bold`]}>Kirim</Text>
      </TouchableOpacity>
    </View>
  );
};
const RenderTrending = () => {
  const data = ["#Chatsud", "#Webinar", "#Event", "#Lomba", "#Teachfess"];
  return (
    <View style={[tw`flex-row items-center justify-between`]}>
      <Text style={[tw`font-bold text-sm`]}>Trending Topic</Text>
      <View style={[tw`items-center flex-row`]}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity key={index}>
              <Text style={[{ fontSize: 11 }, tw`mr-1 text-primary underline`]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
const RenderChat = () => {
  return (
    <View
      style={[
        tw`bg-white shadow-lg px-2 py-1 rounded-lg flex-row items-center justify-between my-2 `,
      ]}
    >
      <View style={[tw`flex-row items-center flex-1 `]}>
        <Image source={Icons.ProfileRounded} style={[tw`mr-2`]} />
        <View style={[tw`flex-1`]}>
          <Text style={[tw`font-bold`]}>Anonymous</Text>
          <Text style={[tw`text-xs my-1`]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla
          </Text>
          <View style={[tw`flex-row items-center`]}>
            <View style={[tw`flex-row items-center mr-1`]}>
              <Image source={Icons.Messages} style={[tw`mr-1`]} />
              <Text style={[tw`text-xs`]}>0</Text>
            </View>
            <View style={[tw`flex-row items-center mr-1`]}>
              <Image source={Icons.Heart} style={[tw`mr-1`]} />
              <Text style={[tw`text-xs`]}>0</Text>
            </View>
            <View style={[tw`flex-row items-center mr-1`]}>
              <Image source={Icons.Share} style={[tw`mr-1`]} />
              <Text style={[tw`text-xs`]}>0</Text>
            </View>
          </View>
        </View>
      </View>
      <Image source={Icons.More} />
    </View>
  );
};
const MainScreen = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`flex-1`]}>
      <View style={Styles.container}>
        <RenderHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.container}>
          <RenderSearch />
          <RenderMessage />
          <RenderTrending />
          {Array.from({ length: 10 }).map((item, index) => {
            return <RenderChat key={index} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
