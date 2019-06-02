import React from 'react';
import {TextInput, View, Text} from 'react-native'
import {mapContextToProps} from '../components/AppContext';


class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'app.json',
    };

    render() {
        return (

                    <View style={styles[this.props.theme]}>
                        <View>
                        <Text style={styles[this.props.theme]}>Rendering a context variable</Text>
                        <Text>{this.props.theme}</Text>
                        </View>
                        <View>
                            <Text style={styles[this.props.theme]}>Change a context variable</Text>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={theme => this.props.updateContext({theme})}
                            value={this.props.theme}/>
                        </View>
                    </View>

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
