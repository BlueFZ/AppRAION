import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  
  return (
    <View>
      <Image
      source={require('../icon/Home.png')}
      style={styles.home}
      />
      <Image
      source={require('../icon/bars.png')}
      style={styles.bars}
      />
      <Image
        source={require('../icon/foto.png')}
        style={styles.Foto}
        />
      <View style={styles.Search}>
        <TextInput 
        placeholder="Cari..."
        style={styles.InputSearch}
        />
        <Image 
        source={require('../icon/search.png')}
        style={styles.SearchIcon}
        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  Home: {
    flex: 1,
    backgroundColor: "white",
  },

  Search: {

    borderWidth: 1,
    backgroundColor: "white",
    borderColor: 'grey',
    borderRadius: 25,
    height: 40,
    paddingLeft: 10,
    paddingRight: 40,
    marginHorizontal: 50,
    top: -45,

  },

  InputSearch: {
    width: "80%",
    fontSize: 15,
    marginTop: 4,
    color: "black",
  },

  SearchIcon: {
    
    top: -25,
    left: 240,
  },

  Foto: {
    
    top: 135,
    left: 16,
  },

  bars: {
    top: 37,
    left: 25,
  },

  home: {
    top: 52,
    left: 163,
  },

  notif: {
    top: 73,
    left: 355,
  },
})