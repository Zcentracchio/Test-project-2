import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, ImageBackground, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        
    },
    paragraph: {
        textAlign: 'center',
        fontSize: 50,
    }

});
