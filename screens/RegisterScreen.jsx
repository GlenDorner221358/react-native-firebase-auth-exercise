// TODO: Create Register Screen & Register Functionality
import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { handleRegister } from '../services/authService';

const RegisterScreen = ( {navigation} ) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => { handleRegister(email, password) }

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text>Register</Text>

        <TextInput
        style={styles.inputField}
        placeholder="Your Email"
        onChangeText={newText => setEmail(newText)}
        defaultValue={email}
        />

        <TextInput
            style={styles.inputField}
            placeholder="Your Password"
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
        />

        <TouchableOpacity style={styles.button} onPress={register}>
            <Text style={styles.buttonText}>Create a new account</Text>
        </TouchableOpacity>

        {/* TODO: Add Login Navigation */}
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text>Log In</Text>
        </TouchableOpacity>

      </View>  
      
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    inputField: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 15
    },
    button: {
        backgroundColor: "green",
        textAlign: 'center',
        padding: 10,
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
})