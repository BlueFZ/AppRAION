import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HeaderCustom from "../../components/header/HeaderCustom";
import Styles from "../../styles/Global";
import InputCustom from "../../components/general/InputCustom";
import { CheckBox } from "react-native-elements";
import tw from "../../lib/tailwind";
import ButtonCustom from "../../components/general/ButtonCustom";
import PickerCustom from "../../components/general/PickerCustom";
import GradueItem from "../../constans/GradueItem";
import { useNavigation } from "@react-navigation/native";

const ForgotScreen = () => {
  const [check, setCheck] = useState(false);
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`flex-1`]}>
      <KeyboardAvoidingView behavior="margin" style={[tw`flex-1`]}>
        <HeaderCustom title="Lupa Password" style={[Styles.container]} />
        <View style={[tw``, Styles.container]}>
          <View style={[tw`mx-5 mt-12`]}>
            <InputCustom title="Email" icon="email-outline" />
            <InputCustom title="Password" icon="eye-outline" />
            <InputCustom title="Re-Enter Password" icon="eye-outline" />
            <ButtonCustom
              title="Selesai"
              style={[tw`bg-primary my-5`]}
              styleText={[tw`text-white`]}
              onPress={() => Navigation.navigate("LoginScreen")}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotScreen;
