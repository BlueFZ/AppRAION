import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HeaderCustom from "../components/header/HeaderCustom";
import Styles from "../styles/Global";
import InputCustom from "../components/general/InputCustom";
import { CheckBox } from "react-native-elements";
import tw from "../lib/tailwind";
import ButtonCustom from "../components/general/ButtonCustom";
import PickerCustom from "../components/general/PickerCustom";
import GradueItem from "../constans/GradueItem";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [check, setCheck] = useState(false);
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`flex-1`]}>
      <KeyboardAvoidingView behavior="margin" style={[tw`flex-1`]}>
        <HeaderCustom title="Daftar" style={[Styles.container]} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[tw` `, Styles.container]}
        >
          <View style={[tw`mx-5 mt-12`]}>
            <InputCustom title="Nama Lengkap" />
            <InputCustom title="Nama Pengguna" />
            <InputCustom title="Email" />
            <InputCustom title="Password" />
            <PickerCustom
              title="Jenjang pendidikan"
              placeholder="SMP/SMA/Pendidikan Tinggi/Lainnya"
              data={GradueItem}
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
            <ButtonCustom
              title="Daftar"
              style={[tw`mt-8 mb-4 bg-primary border-0 `]}
              onPress={() => Navigation.navigate("LoginScreen")}
            />
            <Text style={[tw`text-center mb-5 mt-40`]}>
              Sudah Disini?{"    "}
              <Text
                style={[tw`font-bold underline text-center text-primary  `]}
              >
                Masuk
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
