import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const EventScreen = () => {
    const Navigation = useNavigation();
  return (
    <View>
      <View>
          <TouchableOpacity 
          style={{top: 33}}
          onPress={() => Navigation.navigate("TabNavigation")}
          >
            <Image
              source={require('../../icon/back.png')}
            />
          </TouchableOpacity>

          <Text style={{left: 165, fontSize: 22,fontWeight: 'bold',}}>
            Event
          </Text>

          <TextInput
          placeholder="Cari topik lain"
          style={styles.Search}
          >
          </TextInput>
         
          <Image
          source={require('../../icon/Search.png')}
          style={{top: -22, left: 54}}
          />
        </View>

        <Image
          source={require('../../icon/garis1.png')}
          style={{top: 195, left: 135}}
        />
        
        <TouchableOpacity
        onPress={() => Navigation.navigate("NotificationScreen")}
        style={{top: -83, left: 355}}
      >
        <Image source={require('../../icon/Notification.png')} />
      </TouchableOpacity>

      <Image
      style={{top: -10, width: '100%'}} 
      source={require('../../icon/road.png')}
      />

      <View style={styles.daftar}>
        <TouchableOpacity>
        <Image
          style={{top: -8, left: 5}} 
          source={require('../../icon/ticket.png')}
        />
        <Text style={{fontSize: 12, fontWeight: 'bold', position: 'absolute', top: -4, left: 45, color: 'white'}}>
          Terdaftar
        </Text>
        </TouchableOpacity>
      </View>

      <Image
          style={{top: -36, left: 193}} 
          source={require('../../icon/batas.png')}
      />

      <TouchableOpacity style={{top: -65, left: 210}}>
        <View>
        <Image
          source={require('../../icon/like.png')}
        />
        <Text style={{fontSize: 12, fontWeight: 'bold', position: 'absolute', top: 3, left: 35, color: 'white'}}>
          Tersimpan
        </Text>
        </View> 
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Navigation.navigate("WebinarScreen")}>
        <Image
            style={{top: -40, left: 125}} 
            source={require('../../icon/webinar.png')}
          />
        <Text style={{fontSize: 12, position: 'absolute', top: 12, left: 130}}>
          Webinar 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Navigation.navigate("LombaScreen")}
        style={{top: -93, left: 210}}
      >
      <Image 
        source={require('../../icon/lomba.png')}
      />
      <Text style={{fontSize: 12, position: 'absolute', top: 50, left: 8}}>
          Lomba
        </Text>
      </TouchableOpacity>

      <Text style={{fontSize: 17, fontWeight: 'bold', position: 'absolute', top: 490, left: 8}}>
        Webinar yang lagi Tren!
      </Text>

      <TouchableOpacity 
        // onPress={() => Navigation.navigate("TipsScreen")} 
        >
            <View style={styles.tips}>
                <Image
                source={require('../../icon/cc.png')}
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
                source={require('../../icon/Group.png')}
                style={{top: -15, left: 73}}
                />

                <Text style={{fontSize: 10, position: 'absolute', top: 55, left: 98}}>
                100.000 peserta
                </Text>

                <Image
                source={require('../../icon/kanan.png')}
                style={{top: -50, left: 273}}
                />
            </View>
        </TouchableOpacity>

        <TouchableOpacity 
        // onPress={() => Navigation.navigate("TipsScreen")} 
        >
            <View style={styles.ps}>
                <Image
                source={require('../../icon/ps.png')}
                style={{top: -5, left: 0}}
                />

                <Text style={{fontSize: 12, position: 'absolute', top: 5, left: 85}}>
                    Webinar
                </Text>

                <Text style={{fontSize: 14, fontWeight: 'bold',position: 'absolute', top: 18, left: 85}}>
                How to make a Waifu with PS                 
                </Text>

                <Text style={{fontSize: 12, position: 'absolute', top: 35, left: 85}}>
                    Sel, 22 Mar 2022
                </Text>

                <Image
                source={require('../../icon/Group.png')}
                style={{top: -15, left: 73}}
                />

                <Text style={{fontSize: 10, position: 'absolute', top: 55, left: 98}}>
                100.000 peserta
                </Text>

                <Image
                source={require('../../icon/kanan.png')}
                style={{top: -50, left: 273}}
                />
            </View>
        </TouchableOpacity>

    </View>
  )
}

export default EventScreen
const styles = StyleSheet.create({

  Search: {
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#E6E6EA',
    backgroundColor: '#E6E6EA',
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
    backgroundColor: '#FE4A49',
    height: 36,
    width: 284,
    marginTop: 20,
    left: 51,
  },

  tips: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: '#FAFAFA',
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
    backgroundColor: '#FAFAFA',
    height: 78,
    width: 323,
    top: 10,
    left: 21,
    elevation: 3,
  },
})