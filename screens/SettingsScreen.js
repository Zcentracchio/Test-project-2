import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ImageBackground, Button} from 'react-native';
import { Constants } from 'expo';
import {mapContextToProps} from '../components/AppContext';

class App extends Component {




    render() {
        return (
            <View style={styles.container}>
            <ImageBackground source={require('../assets/images/settings-Screen.png')} style={{width: '100%', height: '100%',}}>
            <TouchableHighlight
                    style={styles.button}
                    onPress={() => {
                        alert('This should change the back ground but we never figured out how to do that.')
                    }}
                >
                    <Text style={styles.buttonText}>
                        Change the Background
                    </Text>
                </TouchableHighlight>
            <View style={styles.textContainer}>

                <Text>Terms of Service</Text>
                <Text>This budgeting app is made for personal use only.</Text>
                <Text>We do not condone Alabama's abortion laws.</Text>
                <Text>Any sexual assault aligations will be treated</Text>
                <Text>like a kid dropped their ice cream. </Text>
                <Text>You may expieriance a rondom amount of money appear </Text>
                <Text>in your account. This is Just to make you feel good.</Text>
                <Text>you're accually broke.</Text>
            </View>
            </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
    },
    buttonView: {
        height: 180,
        width: 300,
        backgroundColor: 'black',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center',
    },
    Text:{
        fontSize: 2,

    },
   textContainer: {
fontSize: 40,
alignItems: 'center',
justifyContent: 'space-around',
marginTop: 130,
   },
   button: {
    marginBottom: 10,
    marginTop: 150,
    marginLeft: 115,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
    height: 120,
    width: 150,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
},
});

export default mapContextToProps(SettingsScreen);
