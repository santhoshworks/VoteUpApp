import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

class Login extends React.Component {
 render(){
    return (
        <View style={styles.wrapper} >
            <View style={styles.loginContainer} >
                <Image style={styles.logo} source={require('../../images/logo.jpg')} />
                 <Text style={styles.title}> Friends Poll</Text>
            </View>
            <View style={styles.formContainer} >
            </View>
        </View>
    );
 }
};

const styles = StyleSheet.create(
    {   
        wrapper: {
            backgroundColor: '#2980b9',
            flex:1,
            justifyContent:'center',
            alignItems: 'center'
        }, 
        loginContainer: {
            flexDirection:'row'
        }, 
        title: {
            color: 'white',
            fontSize: 32,
            fontWeight: 'bold'
        },
        logo:{
            width:50,
            height:50
        }
    }
);

export default Login;