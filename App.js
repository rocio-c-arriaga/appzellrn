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
import MenuPrincipal from './src/components/Menu';


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
  Home: zellApp,
  Iniciar: Login,
  Registrar: Signup,
  Menu: MenuPrincipal
  },
  {
    initialRouteName: 'Iniciar',
  }
);

export default createAppContainer(AppNavigator);