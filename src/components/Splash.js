import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

class Splash extends React.Component {
 render(){
    return (
        <View style={styles.wrapper} >
             <Text style={styles.title}>Friends Poll App</Text>
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
        title: {
            color: 'white',
            fontSize: 35,
            fontWeight: 'bold'
        }
    }
);

export default Splash;