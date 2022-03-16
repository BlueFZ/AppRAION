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
import tw from "../lib/tailwind";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Styles from "../styles/Global";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "../constans/Icons";
import Images from "../constans/Images";
import HeaderSection from "../components/header/HeaderSection";
import ItemOnce from "../components/tren/ItemOnce";

const RenderHeader = () => {
  return (
    <View style={[tw`flex-row justify-between my-5 items-center`]}>
      <TouchableOpacity>
        <Image source={Icons.Burger} />
      </TouchableOpacity>
      <Text style={[tw`font-bold text-xl`]}>Home</Text>
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
        tw`flex-row justify-start my-5 items-center mx-5 p-2 bg-gray-100 rounded-full shadow-md `,
      ]}
    >
      <Image source={Icons.Search} />
      <Text style={[tw`text-gray-400 ml-2`]}>Telusuri</Text>
    </TouchableOpacity>
  );
};
const RenderMenu = () => {
  return (
    <View style={[tw`flex-row justify-center mt-5`]}>
      <TouchableOpacity
        // onPress={() => Navigation.navigate("EducationScreen")}
        style={[tw`justify-center items-center`]}
      >
        <View
          style={[
            tw`p-3 rounded-full bg-[#FE4A49] justify-center items-center self-start mx-6`,
          ]}
        >
          <Image source={Icons.Education} />
        </View>
        <Text style={[tw`mt-2`]}>Edukasi</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => Navigation.navigate("EventScreen")}
        style={[tw`justify-center items-center`]}
      >
        <View
          style={[
            tw`p-3 rounded-full bg-[#0FE93F] justify-center items-center self-start mx-6`,
          ]}
        >
          <Image source={Icons.Event} />
        </View>
        <Text style={[tw`mt-2`]}>Event</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => Navigation.navigate("TeachfessScreen")}
        style={[tw`justify-center items-center`]}
      >
        <View
          style={[
            tw`p-3 rounded-full bg-[#1BDBE8] justify-center items-center self-start mx-6`,
          ]}
        >
          <Image source={Icons.Teachfess} />
        </View>
        <Text style={[tw`mt-2`]}>Teachfess</Text>
      </TouchableOpacity>
    </View>
  );
};
const RenderInformasi = () => {
  return (
    <TouchableOpacity
      style={[tw`flex-row items-center shadow-md bg-white rounded-lg p-3 mt-5`]}
    >
      <Image
        source={Images.Information}
        resizeMode="cover"
        style={[tw`w-12 h-12 rounded-full mr-5`]}
      />
      <View style={[tw`flex-col flex-1`]}>
        <Text style={[tw`font-bold underline`]}>INFORMASI</Text>
        <Text style={[tw`mt-2`]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
          felis nec erat
        </Text>
      </View>
      <Image source={Icons.ArrowRight} />
    </TouchableOpacity>
  );
};
const RenderAlert = () => {
  return (
    <TouchableOpacity
      style={[
        tw`flex-row items-center shadow-md rounded-lg p-3 mt-5  bg-white`,
      ]}
    >
      <View style={[tw`flex-col flex-1`]}>
        <Text style={[tw`font-bold`]}>
          Bingung tentang Materi Pembelajaran? Butuh Tutor Online?
        </Text>
        <Text style={[tw`mt-2`]}>
          Mari cari tutor online sesuai yang kamu inginkan dan sharing bersama
          melalui Teachfess!
        </Text>
      </View>
      <View style={[tw`items-center ml-2`]}>
        <Image source={Icons.Communication} />
        <Text style={[tw`px-2 py-1 bg-primary rounded-full text-white mt-4`]}>
          COBA!
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const RenderEdukasiTerkini = () => {
  return (
    <View style={[tw`flex-row`]}>
      <TouchableOpacity
        style={[tw`flex-1 mr-2 px-2 py-1 shadow-lg bg-gray-100 items-center`]}
      >
        <Image
          source={Images.News1}
          style={[tw`w-full h-20 rounded-lg my-5`]}
        />
        <Text style={[tw`font-bold text-center`]}>Tips dan Trick Belajar!</Text>
        <Text style={[tw` text-center text-xs `]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
          felis nec erat
        </Text>
        <Text style={[tw`font-bold items-center text-xs`]}>
          Lihat selengkapnya <Image source={Icons.ArrowRightLong} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[tw`flex-1 mr-2 px-2 py-1 shadow-lg bg-gray-100 items-center`]}
      >
        <Image
          source={Images.News2}
          style={[tw`w-full h-20 rounded-lg my-5`]}
        />
        <Text style={[tw`font-bold text-center`]}>Tips dan Trick Belajar!</Text>
        <Text style={[tw` text-center text-xs `]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
          felis nec erat
        </Text>
        <Text style={[tw`font-bold items-center text-xs`]}>
          Lihat selengkapnya <Image source={Icons.ArrowRightLong} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const RenderSedangTren = () => {
  return (
    <View>
      <ItemOnce
        title="Premiere pro CC tutorial for beginner "
        tag="Webinar"
        date="Sel, 22 Mar 2022"
        amountUser="100.000"
        image={Images.Tren1}
      />
      <ItemOnce
        title="Lomba mendapatkan hatimu"
        tag="Lomba"
        date="Sel, 22 Mar 2022"
        amountUser="100.000"
        image={Images.Tren2}
      />
    </View>
  );
};
const RenderFriend = () => {
  return (
    <TouchableOpacity
      style={[tw`flex-row p-5 items-center shadow-lg bg-white my-5 rounded-lg`]}
    >
      <Image
        source={Images.Friend}
        style={[tw`w-16 h-16 rounded-full mr-0  `]}
      />
      <View style={[tw`flex-1`]}>
        <Text style={[tw`font-bold text-right`]}>
          Mau cari teman? Chatstud-in Aja!
        </Text>
        <Text style={[tw`text-right text-xs`]}>
          Forum terbuka bagi para pelajar untuk saling berbagi informasi dan
          ngobrol santai!
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const HomeScreen = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`flex-1`]}>
      <View style={Styles.container}>
        <RenderHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.container}>
          <RenderSearch />
        </View>
        <Image source={Images.ThumbnailHeader} style={[tw`h-36 w-full `]} />
        <View style={Styles.container}>
          <RenderMenu />
          <RenderInformasi />
          <RenderAlert />
          <HeaderSection text="Edukasi Terkini" />
          <RenderEdukasiTerkini />
          <HeaderSection text="Sedang Tren!" />
          <RenderSedangTren />
          <RenderFriend />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
