import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class Logo extends React.Component {
    render() {
        return (
            <View style={styles.container}>         
                <Image source={require('../imgs/zell_logo.png')}
                    style={{ width: 100, height: 85 }} />
                <Text style={styles.logoText}>Corporativo Zell</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 20,
        color: 'rgba(255, 255, 255, 0.7)'
    }
})