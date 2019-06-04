import React, { Component } from 'react';
<<<<<<< HEAD
import { AppRegistry, View, StyleSheet, Text, ImageBackground, TouchableHighlight } from 'react-native';
=======
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ImageBackground, Button} from 'react-native';
>>>>>>> 37224bdb8225b3b65ac5b0bb0c906ca30fa82bf0
import { Constants } from 'expo';

export default class App extends Component {
    
<<<<<<< HEAD
    state = {
        currentImg: ['http://www.designbolts.com/wp-content/uploads/2015/07/Colorfu-Polygon-iphone-6-background.jpg', 'https://i.pinimg.com/originals/24/fb/c2/24fbc25e1c64ffcac48baf3c50e8c61f.jpg', 'http://www.designbolts.com/wp-content/uploads/2015/07/low-poly-iphone-6-wallpaper.jpg', 'https://i.pinimg.com/originals/bd/ae/0a/bdae0aa380f1f33b9d5265ddc03e1ef2.jpg', 'http://cdn.wonderfulengineering.com/wp-content/uploads/2014/05/iPhone-wallpaper-45.jpg', 'http://theiphonewalls.com/wp-content/uploads/2013/08/Colorful-Geometry.jpg', 'https://i.pinimg.com/originals/da/f8/6b/daf86bbde0c5dcaaed7eeb80293521cc.jpg'],
        index: 0
    }
   
    // currently the same background image displays every time the app loads
    // write a function to change the background image everytime screen is pressed
    randomBackground = () => {
        this.setState({
            index : Math.floor(Math.random() * (7)),
        })
    };
    
    //Touchable highlight works, just added changeImage function, now need to connect it to touchable highlight
    //also not sure if index is actually working
    render() {
        return (
            <View style={styles.container}>
                    
            
                    <ImageBackground
                        style={styles.background}
                        source={{uri: this.state.currentImg[this.state.index]}}
                    > 
                    <View>
                        <TouchableHighlight
                        onPress={this.randomBackground}>
                            
                            <Text style={styles.paragraph}>
                                Touch to change image
                            </Text>
                        </TouchableHighlight>
                    </View>
                
                    </ImageBackground>
=======
    

    
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
>>>>>>> 37224bdb8225b3b65ac5b0bb0c906ca30fa82bf0
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
<<<<<<< HEAD
    },
    background: {
        flex: 1,
        
    },
    paragraph: {
        textAlign: 'center',
        fontSize: 50,
    }

});
=======
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
>>>>>>> 37224bdb8225b3b65ac5b0bb0c906ca30fa82bf0
