import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


export default class Forgot extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.registroText}>Recupera tu contraseña.
                Ingresa el correo con el que
        te registraste, haz click en
        enviar y sigue las instrucciones
        para recuperar tu contraseña.
         </Text>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid={'transparent'}
                    placeholder="Correo electrónico"
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    maxLength={20} 
                />

                <TouchableOpacity style={styles.button} onPress={this.validateData}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9e9e9e",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        fontSize: 18,
        fontWeight: '500',
        color: '#1b1b1b',
        textAlign: 'center',
        width: 300,
        backgroundColor: 'transparent',
        paddingHorizontal: 16,
        alignItems: 'center',
        backgroundColor: '#cfcfcf',
        marginVertical: 10,
        paddingVertical: 13

    },
    button: {
        width: 300,
        backgroundColor: '#1b1b1b',
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});