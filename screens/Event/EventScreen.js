import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../../lib/tailwind";
import Styles from "../../styles/Global";

const EventScreen = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`flex-1`]}>
      <View
        style={[
          tw`flex-row justify-between items-center my-2`,
          Styles.container,
        ]}
      >
        <TouchableOpacity onPress={() => Navigation.goBack()}>
          <Image source={require("../../icon/back.png")} />
        </TouchableOpacity>

        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Event</Text>

        <TouchableOpacity
          onPress={() => Navigation.navigate("NotificationScreen")}
        >
          <Image source={require("../../icon/Notification.png")} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={[tw`mb-5`]}>
          <TextInput
            placeholder="Cari topik lain"
            style={styles.Search}
          ></TextInput>

          <Image
            source={require("../../icon/Search.png")}
            style={{ top: -22, left: 54 }}
          />
        </View>
        <Image
          source={require("../../icon/garis1.png")}
          style={{ top: 195, left: 135 }}
        />

        <Image
          style={{ top: -10, width: "100%" }}
          source={require("../../icon/road.png")}
        />

        <View
          style={[
            tw`flex-row justify-center items-center bg-[#FE4A49] self-center px-5 rounded-full `,
          ]}
        >
          <TouchableOpacity style={[tw`flex-row items-center mx-3`]}>
            <Image
              source={require("../../icon/ticket.png")}
              style={[tw`mr-2`]}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Terdaftar
            </Text>
          </TouchableOpacity>
          <Image source={require("../../icon/batas.png")} />
          <TouchableOpacity style={[tw`flex-row items-center mx-3`]}>
            <Image source={require("../../icon/like.png")} style={[tw`mr-2`]} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Tersimpan
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[tw`flex-row items-center justify-center my-5`]}>
          <TouchableOpacity
            onPress={() => Navigation.navigate("WebinarScreen")}
            style={[tw`mx-2 items-center`]}
          >
            <Image source={require("../../icon/webinar.png")} />
            <Text style={{ fontSize: 12 }}>Webinar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Navigation.navigate("LombaScreen")}
            style={[tw`mx-2 items-center`]}
          >
            <Image source={require("../../icon/lomba.png")} />
            <Text style={{ fontSize: 12 }}>Lomba</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            Styles.container,
            {
              fontSize: 17,
              fontWeight: "bold",
            },
          ]}
        >
          Webinar yang lagi Tren!
        </Text>

        <TouchableOpacity
          // onPress={() => Navigation.navigate("TipsScreen")}
          style={[
            tw`flex-row mt-5 items-center shadow-md bg-white rounded-md px-2 py-3`,
            Styles.container,
          ]}
        >
          <Image source={require("../../icon/cc.png")} />

          <View style={[tw`ml-5`]}>
            <Text style={[tw`underline`, { fontSize: 12 }]}>Webinar</Text>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Premiere Pro CC tutorial
            </Text>

            <Text style={{ fontSize: 12 }}>Sel, 22 Mar 2022</Text>

            <View style={[tw`flex-row items-center`]}>
              <Image source={require("../../icon/Group.png")} />

              <Text style={{ fontSize: 10 }}>100.000 peserta</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => Navigation.navigate("TipsScreen")}
          style={[
            tw`flex-row mt-5 items-center shadow-md bg-white rounded-md px-2 py-3`,
            Styles.container,
          ]}
        >
          <Image source={require("../../icon/ps.png")} />

          <View style={[tw`ml-5`]}>
            <Text style={[tw`underline`, { fontSize: 12 }]}>Webinar</Text>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              How to make a Waifu with PS
            </Text>

            <Text style={{ fontSize: 12 }}>Sel, 22 Mar 2022</Text>

            <View style={[tw`flex-row items-center`]}>
              <Image source={require("../../icon/Group.png")} />

              <Text style={{ fontSize: 10 }}>100.000 peserta</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventScreen;
const styles = StyleSheet.create({
  Search: {
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#E6E6EA",
    backgroundColor: "#E6E6EA",
    height: 28,
    fontSize: 13,
    paddingLeft: 40,
    paddingRight: 20,
    marginHorizontal: 40,
  },

  daftar: {
    borderRadius: 50,
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: "#FE4A49",
    height: 36,
    width: 284,
    marginTop: 20,
    left: 51,
  },

  tips: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#FAFAFA",
    height: 78,
    width: 323,
    top: -13,
    left: 21,
    elevation: 3,
  },

  ps: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#FAFAFA",
    height: 78,
    width: 323,
    top: 10,
    left: 21,
    elevation: 3,
  },
});
