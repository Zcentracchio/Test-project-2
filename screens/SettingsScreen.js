import React from 'react';
import {TextInput, View, Text, Picker} from 'react-native'
import {mapContextToProps} from '../components/AppContext';


class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'app.json',
    };

    render() {
        return (

            <View style={styles.container}>
                <View>
                    <Text style={styles[this.props.theme]}>Rendering a context variable</Text>
                    <Text>{this.props.someText}</Text>
                </View>
                <View>
                    <Text style={styles[this.props.theme]}>Change a context variable</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={someText => this.props.updateContext({someText})}
                        value={this.props.someText}/>
                </View>

                <Picker
                    selectedValue={this.props.theme}
                    style={{height: 50, width: 100}}
                    onValueChange={theme => this.props.updateContext({theme})}>
                    <Picker.Item label="Light" value="light"/>
                    <Picker.Item label="Dark" value="dark"/>
                </Picker>


            </View>

        );
    }
}

export default mapContextToProps(SettingsScreen);

const styles = {
    container: {
        flex: 1,
        paddingTop: 15
    },
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
    light: {
        backgroundColor: 'white',
        color: 'black',
    },
};
