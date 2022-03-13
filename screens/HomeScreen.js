import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bars}>
       <Image source={require('../icon/bars.png')}/>
      </TouchableOpacity>
      
      <Image source={require('../icon/Home.png')} style={styles.home}/>

      <TouchableOpacity style={styles.notif} onPress={() => Navigation.navigate("NotificationScreen")}>
        <Image source={require('../icon/notif.png')}/>
      </TouchableOpacity>

      <TextInput 
        placeholder="Cari..."
        style={styles.InputSearch}
      />

      <Image 
        source={require('../icon/search.png')}
        style={styles.SearchIcon}
      />

      <Image
        source={require('../icon/foto.png')}
        style={styles.Foto}
      />

      <Image
        source={require('../icon/red.png')}
        style={styles.red}
      />
      
      <TouchableOpacity style={styles.topi} onPress={() => Navigation.navigate("EducationScreen")}>
        <Image source={require('../icon/topi.png')}/>
      </TouchableOpacity>
      <Image
        source={require('../icon/Edukasi.png')}
        style={styles.edu}
      />

      <Image
        source={require('../icon/ijo.png')}
        style={styles.ijo}
      />

      <TouchableOpacity style={styles.calender} onPress={() => Navigation.navigate("EventScreen")}>
      <Image source={require('../icon/calender.png')}/>
      </TouchableOpacity>
      <Image
        source={require('../icon/Event.png')}
        style={styles.event}
      />

      <Image
        source={require('../icon/biru.png')}
        style={styles.biru}
      />

      <TouchableOpacity style={styles.tech} onPress={() => Navigation.navigate("TeachfessScreen")}>
      <Image source={require('../icon/tech.png')}/>
      </TouchableOpacity>
      <Image
        source={require('../icon/Teach.png')}
        style={styles.teach}
      />

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  Home: {
    flex: 1,
    backgroundColor: "white",
  },

  InputSearch: {
    width: "80%",
    fontSize: 15,
    marginTop: 4,
    color: "black",
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: 'grey',
    borderRadius: 25,
    height: 40,
    paddingLeft: 10,
    paddingRight: 40,
    marginHorizontal: 50,
    top: 23,
    left: -10
  },

  SearchIcon: {
    
    top: -10,
    left: 310,
  },

  Foto: {
    
    top: 30,
    left: 16,
  },

  bars: {
    top: 45,
    left: 15,
  },

  home: {
    justifyContent: 'center',
    top: 32,
    left: 163,
  },

  notif: {
    top: 18,
    left: 355,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  red: {
    top: 50,
    left: 70,
  },

  topi: {
    top: 5,
    left: 87,
  },

  edu: {
    top: 23,
    left: 75,
  },

  ijo: {
    top: -48,
    left: 160,
  },

  calender: {
    top: -90,
    left: 180
  },

  event: {
    top: -69,
    left: 170
  },

  biru: {
    top: -140,
    left: 250
  },

  tech: {
    top: -186,
    left: 267,
  },

  teach: {
    top: -166,
    left: 253,
  },
})