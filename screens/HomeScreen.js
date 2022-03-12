import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.Search}>
        <TextInput 
        placeholder="Search here"
        style={styles.InputSearch}
        />
        <Image 
        source={require('../icon/search.png')}
        style={styles.Icon}
        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  Search: {
    marginTop: 40,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: '#E8E8E8',
    borderRadius: 25,
    height: 40,
    paddingLeft: 40,
    paddingRight: 5,
    marginHorizontal: 20,

  },

  InputSearch: {
    width: "80%",
    fontSize: 15,
    marginTop: 4,
    color: "black",
  },

  Icon: {
    position: 'absolute',
    top: 7,
    left: 8,
  },
})