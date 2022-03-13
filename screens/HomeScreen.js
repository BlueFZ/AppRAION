import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import tw from "../lib/tailwind";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

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
        placeholder="Telusuri"
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
      
      <View style={[tw`flex-row justify-center mt-10`]}>
        <TouchableOpacity onPress={() => Navigation.navigate("EducationScreen")} style={[tw`justify-center items-center`]}>
          <View style={[tw`p-3 rounded-full bg-red-400 justify-center items-center self-start mx-4`]}>
            <MaterialIcon name="school-outline" size={28}/>
          </View>  
            <Text>Edukasi</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Navigation.navigate("EventScreen")} style={[tw`justify-center items-center`]}>
          <View style={[tw`p-3 rounded-full bg-green-400 justify-center items-center self-start mx-4`]}>
            <MaterialIcon name="calendar-outline" size={28}/>
          </View>  
            <Text>Event</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Navigation.navigate("TeachfessScreen")} style={[tw`justify-center items-center`]}>
          <View style={[tw`p-3 rounded-full bg-blue-400 justify-center items-center self-start mx-4`]}>
            <MaterialIcon name="clipboard-account-outline" size={28}/>
          </View>  
            <Text>Teachfess</Text>
        </TouchableOpacity>
      
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