import React from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';

class Login extends React.Component {
 render(){
    return (
        <View style={styles.container} >
        <StatusBar barStyle='light-content' />
            <TextInput style={styles.input} 
                placeholder="Email or UserName"
                underlineColorAndroid='rgba(0,0,0,0)'
                onSubmitEditing={()=> this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'/>
            <TextInput style={styles.input} 
                placeholder="Password"
                secureTextEntry
                underlineColorAndroid='transparent'
                returnKeyType='go' 
                ref={(input)=> this.passwordInput = input}
                />
            <TouchableOpacity  style={styles.buttonContainer} >
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
 }
};

const styles = StyleSheet.create(
    {   
       container:{
           padding:20
       } ,
       input: {
           height:40,
           backgroundColor: '#D9F6FC',
           marginBottom: 30
           
       },
       buttonContainer:{
           backgroundColor:'#16a085',
           paddingVertical:15
          

       },
       buttonText: {
        textAlign:'center',
        color:'#FFF',
        fontWeight:'700'
       }
    }
);

export default Login;