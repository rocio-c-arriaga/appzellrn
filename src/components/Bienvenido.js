import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


export default class Hello extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.registroText}>Hello Zell </Text>
             
        <TouchableOpacity style={styles.button} onPress={this.validateData}>
          <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Salir')}>Salir de la cuenta</Text>
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