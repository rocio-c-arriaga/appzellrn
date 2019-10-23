import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';


export default class Login extends React.Component {

    static navigationOptions = {
       
        headerStyle: {
          backgroundColor: '#424242',
        }
      };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#1b1b1b" barStyle="light-content" />
                <Logo />
                <Form type="Signup" />
                <View>
                <Text style={styles.registroTexto} onPress={() => this.props.navigation.navigate('Restauracion')}>¿Olvidaste tu contraseña? </Text>

                </View>

                <View style={styles.registroTextCont}>
                    <Text style={styles.registroText}>¿Eres nuevo usuario? </Text>
        <Text style={styles.registroBoton} onPress={() => this.props.navigation.navigate('Registrar')}>Registrate</Text> 
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#424242",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    registroTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    registroText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
        
    },
    registroText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
        fontWeight: '500' 
    },
    registroBoton: {
     color: '#ffffff',
     fontSize: 16,
     fontWeight: '500'   
    }
});