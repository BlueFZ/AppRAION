import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HeaderCustom from "../components/header/HeaderCustom";
import Styles from "../styles/Global";
import InputCustom from "../components/general/InputCustom";
import { CheckBox } from "react-native-elements";
import tw from "../lib/tailwind";
import ButtonCustom from "../components/general/ButtonCustom";

const RegisterScreen = () => {
  const [check, setCheck] = useState(false);
  return (
    <SafeAreaView style={[Styles.container]}>
      <ScrollView>
        <HeaderCustom title="DAFTAR" />
        <InputCustom title="Nama Lengkap" />
        <InputCustom title="Nama Pengguna" />
        <InputCustom title="Email" />
        <InputCustom title="Password" />
        <InputCustom
          title="Jenjang pendidikan"
          placeholder="SMP/SMA/Pendidikan Tinggi/Lainnya"
        />
        <InputCustom title="Nama Univ" />
        <View style={[tw`flex-row items-center`]}>
          <CheckBox
            checked={check}
            onPress={() => setCheck(!check)}
            containerStyle={[tw`mx-2 px-0 `]}
          />
          <Text>
            Saya menyetujui{" "}
            <Text style={[tw`font-bold`]}>Syarat & Ketentuan</Text> dan{" "}
            <Text style={[tw`font-bold`]}>Kebijakan Privasi</Text>
          </Text>
        </View>
        <ButtonCustom title="Daftar" />
        <Text style={[tw`text-center`]}>
          Sudah Disini?{" "}
          <Text style={[tw`font-bold underline text-center `]}>Masuk</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
