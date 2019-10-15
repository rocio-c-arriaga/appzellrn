import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation'

class FormSign extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#1b1b1b" barStyle="light-content" />
                <TextInput style={styles.inputBox} 
                underlineColorAndroid={'transparent'}
                placeholder="Primer nombre"
                placeholderTextColor='rgba(255, 255, 255, 0.7)'               
                 />
                <TextInput style={styles.inputBox} 
                underlineColorAndroid={'transparent'}
                placeholder="Segundo nombre"
                placeholderTextColor='rgba(255, 255, 255, 0.7)'               
                 />
                 <TextInput style={styles.inputBox} 
                underlineColorAndroid={'transparent'}
                placeholder="Primer apellido"
                placeholderTextColor='rgba(255, 255, 255, 0.7)'               
                 />
                 <TextInput style={styles.inputBox} 
                underlineColorAndroid={'transparent'}
                placeholder="Segundo apellido"
                placeholderTextColor='rgba(255, 255, 255, 0.7)'               
                 />
                 <TextInput style={styles.inputBox} 
                underlineColorAndroid={'transparent'}
                placeholder="correoelectrónico@zell.com"
                placeholderTextColor='rgba(255, 255, 255, 0.7)'               
                 />
                 <TextInput style= {styles.inputBox} 
                underlineColorAndroid={'transparent'}
                placeholder="Contraseña"
                secureTextEntry= {true}      
                placeholderTextColor='rgba(255, 255, 255, 0.7)'            
                 />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Menu')}>Registrarme</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

export default withNavigation(FormSign);

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent:'center',
        alignItems:'center'
    },

    inputBox: {
        width:300,
        backgroundColor:'transparent',
        borderBottomColor:'#f8f8f8',
        borderBottomWidth: 1,
        paddingHorizontal: 16,
        fontSize:18,
        color: '#ffffff',
        marginVertical: 10,      
    },
    button:{
        width:300,
        backgroundColor: '#1b1b1b',
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 18,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
});