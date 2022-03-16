import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonCustom from "../../components/general/ButtonCustom";
import InputCustom from "../../components/general/InputCustom";
import Images from "../../constans/Images";
import tw from "../../lib/tailwind";
import Styles from "../../styles/Global";

const LoginScreen = () => {
  const Navigation = useNavigation();
  return (
    <>
      <Image source={Images.LoginHeader} style={[tw`w-full `]} />
      <View style={[tw`items-center absolute w-full top-15`]}>
        <Image source={Images.Logo} />
      </View>

      <SafeAreaView style={[tw`justify-between flex-1`]}>
        <KeyboardAvoidingView
          style={[Styles.container, tw` flex-1 justify-between mb-20`]}
          behavior="margin"
        >
          <View>
            <Text style={[tw`text-2xl font-bold`]}>
              Kembangkan Ilmu bersama!
            </Text>
            <Text style={[tw`text-lg`]}>Yuk, Gabung bersama kami!</Text>
            <View style={[tw`mt-5`]}>
              <InputCustom title="Email" icon="email-outline" />
              <InputCustom
                title="Password"
                icon="eye-outline"
                secureTextEntry={true}
              />
              <ButtonCustom
                title="Masuk"
                style={[tw`bg-primary my-5`]}
                styleText={[tw`text-white`]}
                onPress={() => Navigation.navigate("TabNavigation")}
              />
            </View>
            <Text
              style={[tw`text-primary underline font-bold`]}
              onPress={() => Navigation.navigate("ForgotScreen")}
            >
              Lupa Password?
            </Text>
          </View>
          <Text style={[tw`text-center `]}>
            Belum mempunyai akun?{" "}
            <Text
              style={[tw`text-primary underline font-bold`]}
              onPress={() => Navigation.navigate("RegisterScreen")}
            >
              Daftar
            </Text>
          </Text>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 100,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 14,
  },
  image: {
    position: "absolute",
  },
});
