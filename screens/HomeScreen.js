import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bars}>
       <Image source={require('../icon/bars.png')}/>
      </TouchableOpacity>
      
      <Image source={require('../icon/Home.png')} style={styles.home}/>

      <TouchableOpacity style={styles.notif}>
        <Image source={require('../icon/notif.png')}/>
      </TouchableOpacity>

      <TextInput 
        placeholder="Cari..."
        style={styles.InputSearch}
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

  // Search: {

  //   borderWidth: 1,
  //   backgroundColor: "white",
  //   borderColor: 'grey',
  //   borderRadius: 25,
  //   height: 40,
  //   paddingLeft: 10,
  //   paddingRight: 40,
  //   marginHorizontal: 50,
  //   top: -45,

  // },

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
    
    top: -25,
    left: 240,
  },

  Foto: {
    
    top: 135,
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

  
  
})