import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView
} from 'react-native';

import Logo from '../components/Logo';
import FormSign from '../components/FormSign';


export default class Signup extends React.Component {

    static navigationOptions = {
       
        headerStyle: {
          backgroundColor: '#424242',
        }
      };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar backgroundColor="gray" barStyle="light-content" />
                    <Logo />
                    <FormSign />

                    <View style={styles.registroTextCont}>
                        <Text style={styles.registroText}>Si ya tienes cuenta </Text>
                        <Text style={styles.registroBoton} onPress={() => this.props.navigation.navigate('Iniciar')} >inicia sesión aquí</Text>
                    </View>
                </View>
            </ScrollView>
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
    registroBoton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
});