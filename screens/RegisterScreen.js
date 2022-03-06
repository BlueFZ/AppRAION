import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HeaderCustom from "../components/header/HeaderCustom";
import Styles from "../styles/Global";

const RegisterScreen = () => {
  return (
    <SafeAreaView style={[Styles.container]}>
      <HeaderCustom title="Daftar" />
    </SafeAreaView>
  );
};

export default RegisterScreen;
