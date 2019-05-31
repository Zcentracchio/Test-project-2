import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native'
import {ContextProvider, Consumer, mapContextToProps} from '../components/AppContext';





class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'app.json',
    };

    render() {
        return (


                    <View style={styles[this.props.theme]}><Text>{this.props.theme}</Text></View>


        );
    }
}

export default mapContextToProps(SettingsScreen);
const styles = {
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
    light: {
        backgroundColor: 'white',
        color: 'black',
    },
};
