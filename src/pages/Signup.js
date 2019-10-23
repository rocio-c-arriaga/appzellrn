import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
   
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
            
                <View style={styles.container}>
                    <StatusBar backgroundColor="gray" barStyle="light-content" />
                    <Logo />
                    <FormSign />

                   
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
    }
});