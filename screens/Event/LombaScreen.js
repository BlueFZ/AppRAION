import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LombaScreen = () => {
  const Navigation = useNavigation();
  return (
    <View>
      <View>
        <TouchableOpacity
          style={{ top: 33 }}
          onPress={() => Navigation.goBack()}
        >
          <Image source={require("../../icon/back.png")} />
        </TouchableOpacity>

        <Text style={{ left: 165, fontSize: 22, fontWeight: "bold" }}>
          Lomba
        </Text>

        <TextInput placeholder="Cari Lomba" style={styles.Search}></TextInput>

        <Image
          source={require("../../icon/Search.png")}
          style={{ top: -22, left: 54 }}
        />
      </View>

      <TouchableOpacity>
        <View style={styles.biru}>
          <Text
            style={{
              position: "absolute",
              fontSize: 13,
              fontWeight: "bold",
              color: "white",
              top: 4,
              left: 14,
            }}
          >
            Semua
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.putih}>
        <View>
          <Text
            style={{
              position: "absolute",
              fontSize: 13,
              fontWeight: "bold",
              color: "black",
              top: -10,
              left: 3,
            }}
          >
            UI/UX
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.comp}>
        <View>
          <Text
            style={{
              position: "absolute",
              fontSize: 13,
              fontWeight: "bold",
              color: "black",
              top: 5,
              left: 3,
            }}
          >
            Competitive Programming
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Navigation.navigate("ExampleEventScreen")}
      >
        <View style={styles.tips}>
          <Image
            source={require("../../icon/Bola.png")}
            style={{ top: -5, left: 0 }}
          />

          <Text
            style={{ fontSize: 12, position: "absolute", top: 5, left: 85 }}
          >
            Lomba
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              position: "absolute",
              top: 18,
              left: 85,
            }}
          >
            Lomba 3D Design
          </Text>

          <Text
            style={{ fontSize: 12, position: "absolute", top: 35, left: 85 }}
          >
            Sel, 22 Mar 2022
          </Text>

          <Image
            source={require("../../icon/Group.png")}
            style={{ top: -15, left: 73 }}
          />

          <Text
            style={{ fontSize: 10, position: "absolute", top: 55, left: 98 }}
          >
            100.000 peserta
          </Text>

          <Image
            source={require("../../icon/kanan.png")}
            style={{ top: -50, left: 273 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      // onPress={() => Navigation.navigate("TipsScreen")}
      >
        <View style={styles.ps}>
          <Image
            source={require("../../icon/kuning.png")}
            style={{ top: -5, left: 0 }}
          />

          <Text
            style={{ fontSize: 12, position: "absolute", top: 5, left: 85 }}
          >
            Lomba
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              position: "absolute",
              top: 18,
              left: 85,
            }}
          >
            Lomba 2D Design
          </Text>

          <Text
            style={{ fontSize: 12, position: "absolute", top: 35, left: 85 }}
          >
            Sel, 22 Mar 2022
          </Text>

          <Image
            source={require("../../icon/Group.png")}
            style={{ top: -15, left: 73 }}
          />

          <Text
            style={{ fontSize: 10, position: "absolute", top: 55, left: 98 }}
          >
            100.000 peserta
          </Text>

          <Image
            source={require("../../icon/kanan.png")}
            style={{ top: -50, left: 273 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LombaScreen;
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
    marginHorizontal: 35,
  },

  biru: {
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#31A0E8",
    height: 20,
    width: 72,
    left: 40,
    elevation: 3,
  },

  putih: {
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#F3F3F3",
    height: 20,
    width: 72,
    top: -28,
    left: 120,
    elevation: 3,
  },

  comp: {
    borderRadius: 50,
    backgroundColor: "#F3F3F3",
    height: 28,
    width: 157,
    top: -55,
    left: 200,
    elevation: 3,
  },

  tips: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#FAFAFA",
    height: 78,
    width: 353,
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
    width: 353,
    top: 10,
    left: 21,
    elevation: 3,
  },
});
