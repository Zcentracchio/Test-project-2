import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ImageBackground, Picker} from 'react-native';
import { Constants } from 'expo';
import {mapContextToProps} from '../components/AppContext';

class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'app.json',
    };
    
    

    
    render() {
        return (
            <View style={styles[this.props.theme]}>
                <View style={styles.picker}>
                    <Text style = {styles.headerText}>Pick a background color</Text>
                    <Picker
                        selectedValue={this.props.theme}
                        style={{height: 50, width: 200}}
                        onValueChange={theme => this.props.updateContext({theme})}>
                        <Picker.Item label="White" value='white'/>
                        <Picker.Item label="Pink" value='pink'/>
                    </Picker>
                        

                    <View style={styles.terms}>
                        
                        <Text>Terms of Service</Text>
                        <Text>This budgeting app is made for personal use only.</Text>
                        <Text>We do not condone Alabama's abortion laws.</Text>
                        <Text>Any sexual assault aligations will be treated</Text>
                        <Text>like a kid dropped their ice cream. </Text>
                        <Text>You may expieriance a rondom amount of money appear </Text>
                        <Text>in your account. This is Just to make you feel good.</Text>
                        <Text>you're accually broke.</Text>
                    </View>
                    </View>
            </View>
        );
    }
}

export default mapContextToProps(SettingsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
    },    
    pink: {
        flex: 1,
        backgroundColor: 'pink',
        color: 'white',
    },
    white: {
        flex: 1,
        backgroundColor: 'white',
        color: 'black',
    },
    picker: {
        flex:1,

    },
    terms: {
        marginTop: 50,
        flex:1,
    },

});
