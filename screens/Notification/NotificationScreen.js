import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const NotificationScreen = () => {
    const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={() => Navigation.navigate("TabNavigation")}
      style={styles.back}>
       <Image 
       source={require('../../icon/back.png')}
       style={styles.BackContainer}
       />
      </TouchableOpacity>
      <View>
        <Text style={styles.word}>
          Notifikasi
        </Text>
      </View>

      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          styles={styles.ButtonSemua}
        >
          <Text
            style={styles.semua}          
          >
            Semua
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}

export default NotificationScreen
  const styles = StyleSheet.create({

    container: {
      flex: 1,

    },

    BackContainer: {
      width: '10%',
    },

    back: {
      top: 41,
      left: 5,
    },

    word: {
      textAlign: 'center',
      top: 10,
      fontWeight: '700',
      fontSize: 20
    },

    ButtonContainer: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 35,
    },

    ButtonSemua: {
      backgroundColor: 'black',
      borderColor: 'black',
      
    },
  })