import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput,TouchableOpacity, View } from 'react-native'

const LoginScreen = () => {
  return (
    
    <KeyboardAvoidingView
      style={styles.container}
      behavior= "padding"
    >
      <View style={styles.InputContainer}>

      <TextInput
        placeholder="Email"
        // value={ }
        // OnChangeText={text => }
        style={styles.Input}
      />

      <TextInput
        placeholder="Password"
        // value={ }
        // OnChangeText={text => }
        style={styles.Input}
        secureTextEntry
      />

      <View styles= { styles.buttonContainer}>
        <TouchableOpacity
        onPress= {( ) => { }}
        style={styles.button}
        >
          <Text style={styles.buttonOutlineText}> Login </Text>

        </TouchableOpacity>
        
        <TouchableOpacity
        onPress= {( ) => { }}
        style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}> Register </Text>

        </TouchableOpacity>

      </View>
      
      </View>

    </KeyboardAvoidingView>

  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

InputContainer: {
  width: '75%'
},
Input: {
  backgroundColor: 'white',
  paddingHorizontal: 15,
  paddingVertical: 10,
  borderRadius: 10,
  marginTop: 5,
},
buttonContainer: {

},
button: {
  
},
buttonOutline: {
  textAlign : 'center',
},
buttonText: {

},
buttonOutlineText: {
  textAlign : 'center',
},

})
  