import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";


const SearchScreen = () => {
    const Navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View>
        <TouchableOpacity 
          style={{top: 31}}
          onPress={() => Navigation.navigate("TabNavigation")}
          >
            <Image
              source={require('../icon/back.png')}
            />
          </TouchableOpacity>

           <TextInput
          placeholder="Telusuri"
          style={styles.Search}
          >
          </TextInput>
         
          <Image
          source={require('../icon/Search.png')}
          style={{top: -21, left: 54}}
          />        
        </View>

        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#008E97', marginTop: 20, marginLeft: 15}}>
            Trending Event
        </Text>

        <TouchableOpacity 
        // onPress={() => Navigation.navigate("TipsScreen")} 
        >
            <View style={styles.tips}>
                <Image
                source={require('../icon/cc.png')}
                style={{top: -5, left: 0}}
                />

                <Text style={{fontSize: 12, position: 'absolute', top: 5, left: 85}}>
                    Webinar
                </Text>

                <Text style={{fontSize: 14, fontWeight: 'bold',position: 'absolute', top: 18, left: 85}}>
                    Premiere Pro CC tutorial  
                </Text>

                <Text style={{fontSize: 12, position: 'absolute', top: 35, left: 85}}>
                    Sel, 22 Mar 2022
                </Text>

                <Image
                source={require('../icon/Group.png')}
                style={{top: -15, left: 73}}
                />

                <Text style={{fontSize: 10, position: 'absolute', top: 55, left: 98}}>
                100.000 peserta
                </Text>

                <Image
                source={require('../icon/kanan.png')}
                style={{top: -50, left: 273}}
                />
            </View>
        </TouchableOpacity>

        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#008E97', marginTop: 20, marginLeft: 15}}>
            Rekomendasi Event
        </Text>
        
        <TouchableOpacity style={{top: 30, left: 110}}>
        <Image
            source={require('../icon/tgl.png')}
        />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image
            source={require('../icon/piala.png')}
            style={{top: -23, left: 195}}
        />
        </TouchableOpacity>

        <Text style={{fontSize: 12, position: 'absolute', top: 340, left: 115}}>
          Webinar
        </Text>

        <Text style={{fontSize: 12, position: 'absolute', top: 340, left: 204}}>
          Lomba
        </Text>

        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#008E97', marginTop: 30, marginLeft: 15}}>
            Rekomendasi Event
        </Text>

        <TouchableOpacity onPress={() => Navigation.navigate("TipsScreen")}>
            <View style={styles.meja}>
            <Image
              source={require('../icon/meja.png')}
              style={{top: -5, left: 16}}
            />

            <Text style={{fontSize: 12}}>
              Tips dan Trick Belajar
            </Text>

            <Text style={{fontSize: 7}}>
            Di masa-masa penuh ujian seperti ini, belajar jadi suatu “keharusan”. Akan tetapi, apakah cara belajar kamu sudah efektif? Nah, kali ini edustation memberikan tips dan trick agar belajar menjadi menyenangkan!  
            </Text>

            <Text style={{fontSize: 9, fontWeight: 'bold', position: 'absolute', top: 140, left: 38}}>
              Lihat Selengkapnya
            </Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pelajar}>
            <View>
            <Image
              source={require('../icon/buku.png')}
              style={{top: -5, left: 16}}
            />

            <Text style={{fontSize: 12}}>
            Pelajar yang Produktif
            </Text>

            <Text style={{fontSize: 7}}>
            Pandemi COVID-19 ini membuat pelajar tidak melakukan kegiatan seperti biasanya.  Hal tersebut pelajar harus  beradaptasi dan tetap produktif di masa yang penuh tantangan ini. Nah, kali ini Edustation akan memberikan...            
            </Text>

            <Text style={{fontSize: 9, fontWeight: 'bold', position: 'absolute', top: 125, left: 32}}>
            Lihat selengkapnya
            </Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity 
          style={{top: -160, left: 25}}
          onPress={() => Navigation.navigate("EducationScreen")}
          >
            <Image
              source={require('../icon/kanan2.png')}
            />

            <Text style={{fontSize: 12, position: 'absolute', top: 3.5, left: 28}}>
            Lihat Semua Edukasi
            </Text>
          </TouchableOpacity>

    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    Search: {
        marginTop: 0,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#E6E6EA',
        backgroundColor: '#E6E6EA',
        height: 28,
        fontSize: 13,
        paddingLeft: 38,
        paddingRight: 20,
        marginHorizontal: 40,
      },

      tips: {
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 14,
        backgroundColor: '#FAFAFA',
        height: 78,
        width: 323,
        marginTop: 15,
        left: 21,
        elevation: 3,
      },
      
      meja: {
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 14,
        backgroundColor: '#FAFAFA',
        height: 159,
        width: 159,
        marginTop: 40,
        left: 21,
        elevation: 3,
      },

      pelajar: {
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 14,
        backgroundColor: '#FAFAFA',
        height: 159,
        width: 159,
        marginTop: 20,
        top: -175,
        left: 200,
        elevation: 3,
      },
})