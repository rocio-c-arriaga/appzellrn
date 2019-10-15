import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation'
import t from 'tcomb-form-native';
/*
const Form = t.form.Form;

const User = t.struct ({
    email: t.String,
    terms: t.Boolean,
})
*/
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#1b1b1b" barStyle="light-content" />
               
                <TextInput
                id='email'
                style={styles.inputBox} 
                underlineColorAndroid={'transparent'}
                placeholder="correoelectrónico@zell.com"
                placeholderTextColor='rgba(255, 255, 255, 0.7)' 
                onChangeText={(text) => this.validate (text)}
                value={this.state.email}              
                 />
                 <TextInput
                 id='password'
                 style= {styles.inputBox} 
                underlineColorAndroid={'transparent'}
                placeholder="Contraseña"
                secureTextEntry= {true}      
                placeholderTextColor='rgba(255, 255, 255, 0.7)'            
                 /> 
                      
            <TouchableOpacity style={styles.button} onPress={this.validateData}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
            </View>
        )
    }
};

/*

function validateData() {
    //REGEX
    //EMAIL
    //PASSWORD

    if (valido) {
        this.props.navigation.navigate('Menu')
    }
    else {
        //muestra error
    }
    
}

<TextInput
      placeholder="Email ID"
      onChangeText={(text) => this.validate(text)}
      value={this.state.email}
    />

validate = (text) => {
    console.log(text);
    var reg = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(reg.test(text) === false)
    {
    console.log("Email is Not Correct");
    this.setState({email:text})
    return false;
      }
    else {
      this.setState({email:text})
      console.log("Email is Correct");
    }
    }

*/
    

export default withNavigation(Form);



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