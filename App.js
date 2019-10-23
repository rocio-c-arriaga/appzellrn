/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import ActivacionV from './src/components/Activacion';
import Forgot from './src/components/Forgot';
import Hello from './src/components/Bienvenido';


class zellApp extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <StatusBar backgroundColor="#1b1b1b" barStyle="light-content" />
        <Signup/>
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

const AppNavigator = createStackNavigator(
  {
  Home:  {
    screen: zellApp,
    navigationOptions: {
      header: null, 
    },  
  },
  
  Iniciar: Login,
  Registrar: {
    screen:  Signup,
    navigationOptions: {
      // desaparece el header y el boton de regresar predeterminado https://stackoverflow.com/questions/51129444/how-to-hide-header-of-createstacknavigator-on-react-native
      header: null, 
    },  
  },
 
  Activacion: {
    screen: ActivacionV,
    navigationOptions: {
      header: null, 
    },  
  },
  Restauracion: Forgot,
  Bienvenido: Hello,
  Salir: Login
  },
  {
    initialRouteName: 'Iniciar',
  }
);



export default createAppContainer(AppNavigator);