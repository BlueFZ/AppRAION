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

const EducationScreen = () => {
  const Navigation = useNavigation();
  return (
    <View styles={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => Navigation.navigate("TabNavigation")}
        >
          <Image source={require("../../icon/back.png")} />
        </TouchableOpacity>

        <Text style={styles.Edukasitxt}>Edukasi</Text>

        <TextInput
          placeholder="Cari topik lain"
          style={styles.Search}
        ></TextInput>

        <Image
          source={require("../../icon/Search.png")}
          style={{ top: -22, left: 54 }}
        />

        <Image
          source={require("../../icon/FotoEdu.png")}
          style={{ top: -5, left: 0, width: "100%" }}
        />

        <Text
          style={{
            fontSize: 19,
            fontWeight: "bold",
            color: "#008E97",
            top: 5,
            left: 20,
          }}
        >
          Edukasi Terkini
        </Text>

        <TouchableOpacity
          style={styles.tips}
          onPress={() => Navigation.navigate("TipsScreen")}
        >
          <Image
            source={require("../../icon/meja.png")}
            style={{ top: -5, left: 16 }}
          />

          <Text style={{ fontSize: 12 }}>Tips dan Trick Belajar</Text>

          <Text style={{ fontSize: 7 }}>
            Di masa-masa penuh ujian seperti ini, belajar jadi suatu
            “keharusan”. Akan tetapi, apakah cara belajar kamu sudah efektif?
            Nah, kali ini edustation memberikan tips dan trick agar belajar
            menjadi menyenangkan!
          </Text>

          <Text
            style={{
              fontSize: 9,
              fontWeight: "bold",
              position: "absolute",
              top: 140,
              left: 38,
            }}
          >
            Lihat Selengkapnya
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.waktu}>
          <Image
            source={require("../../icon/jam.png")}
            style={{ top: -5, left: 16 }}
          />

          <Text style={{ fontSize: 12 }}>Cara Memanage Waktu</Text>

          <Text style={{ fontSize: 7 }}>
            Belajar merupakan aktivitas yang wajib dilakukan oleh semua orang
            terutama para pelajar.
          </Text>

          <Text
            style={{
              fontSize: 9,
              fontWeight: "bold",
              position: "absolute",
              top: 140,
              left: 38,
            }}
          >
            Lihat Selengkapnya
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pelajar}>
          <Image
            source={require("../../icon/buku.png")}
            style={{ top: -5, left: 16 }}
          />

          <Text style={{ fontSize: 12 }}>Pelajar yang Produktif</Text>

          <Text style={{ fontSize: 7 }}>
            Pandemi COVID-19 ini membuat pelajar tidak melakukan kegiatan
            seperti biasanya. Hal tersebut pelajar harus beradaptasi dan tetap
            produktif di masa yang penuh tantangan ini. Nah, kali ini Edustation
            akan memberikan...
          </Text>

          <Text
            style={{
              fontSize: 9,
              fontWeight: "bold",
              position: "absolute",
              top: 140,
              left: 38,
            }}
          >
            Lihat selengkapnya
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.siswa}>
          <Image
            source={require("../../icon/siswa.png")}
            style={{ top: -5, left: 16 }}
          />

          <Text style={{ fontSize: 12 }}>Menjadi Siswa Aktif!</Text>

          <Text
            style={{
              fontSize: 9,
              fontWeight: "bold",
              position: "absolute",
              top: 140,
              left: 38,
            }}
          >
            Lihat selengkapnya
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EducationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  BackButton: {
    top: 33,
  },

  Edukasitxt: {
    left: 155,
    fontSize: 20,
    fontWeight: "bold",
  },

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

  tips: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#FAFAFA",
    height: 159,
    width: 159,
    marginTop: 10,
    left: 21,
    elevation: 3,
  },

  waktu: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#FAFAFA",
    height: 159,
    width: 159,
    marginTop: 20,
    left: 21,
    elevation: 3,
  },

  pelajar: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#FAFAFA",
    height: 159,
    width: 159,
    marginTop: 20,
    top: -358,
    left: 200,
    elevation: 3,
  },

  siswa: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#FAFAFA",
    height: 159,
    width: 159,
    marginTop: 20,
    top: -358,
    left: 200,
    elevation: 3,
  },
});
