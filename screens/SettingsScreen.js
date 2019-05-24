import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    
    state = {
        backgroundToDisplay: '',
    }
    
    selectBackground = (timeOfDay) => {
        if (timeOfDay == 'morning') {
            this.setState({ 
                backgroundToDisplay: '../assets/images/settings-Screen.png',
            })
        
        } else if (timeOfDay == 'evening') {
            this.setState({ 
                backgroundToDisplay: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/new-york-city-empire-state-building-sunset-christopher-arndt.jpg',
            })
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={{uri: this.state.backgroundToDisplay}}
                >
                
                    <TouchableHighlight
                        onPress={() => this.selectBackground('morning')}
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>
                                Good morning!
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                    
                    <TouchableHighlight
                        onPress={() => this.selectBackground('evening')}
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>
                                Good evening!
                            </Text>
                        </View>
                    </TouchableHighlight>
                
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
    },
    background: {
        flex: 1,
    },
    buttonView: {
        height: 80,
        width: 200,
        backgroundColor: 'black',
        justifyContent: 'center',

    },
    buttonText: {
        fontSize: 30, 
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },
    ImageBackground:{

    }
});