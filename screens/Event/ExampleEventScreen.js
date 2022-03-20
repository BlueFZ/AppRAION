import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderSection from "../../components/header/HeaderSection";
import HeaderTabCustom from "../../components/header/HeaderTabCustom";
import Styles from "../../styles/Global";
import Images from "../../constans/Images";
import tw from "../../lib/tailwind";
import Icons from "../../constans/Icons";
const RenderType = () => {
  const Badge = (props) => {
    return (
      <View
        style={[tw`bg-gray-50 px-5 rounded-full border border-primary mr-1`]}
      >
        <Text>{props.text}</Text>
      </View>
    );
  };
  return (
    <View style={[tw`flex-row my-5`]}>
      <Badge text="UI/UX" />
      <Badge text="Competitive Progamming" />
    </View>
  );
};
const RenderDetail = () => {
  return (
    <View style={[tw`my-4`]}>
      <View style={[tw`flex-row items-center`]}>
        <Image source={Icons.BEM} style={[tw`h-8 w-8 rounded-full`]} />
        <Text style={[tw`ml-5 text-lg`]}>BEM FILKOM UB</Text>
      </View>
      <View style={[tw`flex-row items-center`]}>
        <Image source={Icons.Calendar} style={[tw`h-8 w-8 rounded-full`]} />
        <View>
          <Text style={[tw`ml-5 text-lg`]}>Pendaftaran: 6 Nov - 30 Nov</Text>
          <Text style={[tw`ml-5 text-lg`]}>Event : 3 Des - 5 Des</Text>
        </View>
      </View>
      <View style={[tw`flex-row items-center`]}>
        <Image
          source={Icons.Profile_2user}
          style={[tw`h-8 w-8 rounded-full`]}
        />
        <Text style={[tw`ml-5 text-lg`]}>34/64 Peserta</Text>
      </View>
    </View>
  );
};
const ExampleEventScreen = () => {
  return (
    <SafeAreaView style={[tw`flex-1`]}>
      <ScrollView>
        <View style={[Styles.container]}>
          <HeaderTabCustom style={[tw`my-5`]} />
        </View>
        <View>
          <Image
            source={Images.ExampleLomba}
            style={[tw`w-full h-48`]}
            resizeMode="cover"
          />
          <TouchableOpacity style={[tw` absolute right-5 top-5  `]}>
            <Image source={Icons.Share3} />
          </TouchableOpacity>
        </View>
        <View style={[Styles.container]}>
          <RenderType />
          <View style={[tw`flex-row items-center justify-between`]}>
            <Text style={[tw`text-2xl font-bold`]}>HOLOGY 4.0</Text>
            <Image source={Icons.Notification} />
          </View>
          <RenderDetail />
        </View>
        <View style={[tw`bg-gray-400 w-full h-[0.5]`]} />

        <View style={[Styles.container]}>
          <Text style={[tw`font-bold text-lg`]}>DESKRIPSI EVENT</Text>
          <Text style={[tw`text-justify`]}>
            HOLOGY atau (House of Technology) adalah sebuah kegiatan berskala
            nasional di bidang Teknologi Informasi dan Komunikasi yang
            diselenggarakan oleh Fakultas Ilmu Komputer Universitas Brawijaya
            dengan menggabungkan konsep kompetisi, edukasi, dan festival.
          </Text>
        </View>
      </ScrollView>
      <View
        style={[
          tw`flex-row items-center justify-center my-2`,
          Styles.container,
        ]}
      >
        <TouchableOpacity
          style={[
            tw`flex-1 bg-primary mx-5 text-center items-center py-2 rounded-full `,
          ]}
        >
          <Text style={[tw`text-white font-bold`]}>Daftar Rp 199.000</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Icons.Archive_tick} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ExampleEventScreen;
