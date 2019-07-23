import React from 'react';
import {
    ScrollView,
    Alert,
    StyleSheet,
    View,
    Text,
    TextInput,
    Keyboard,
    TouchableHighlight,
    KeyboardAvoidingView
} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import {white} from 'ansi-colors';
import {mapContextToProps} from '../components/AppContext';
import {Header} from 'react-navigation';
import {Constants} from 'expo';


class LinksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputBills: null,
            inputFood: null,
            inputEntertainment: null,
            exportBills: null,
            exportFood: null,
            exportEntertainment: null
        };
    }

    static navigationOptions = {
        title: 'Receipts'
    };


    addReceipt = (category, amount) => () => {
        // We need to dismiss the keyboard manually because, in out layout, a textInput always has the focus.
        Keyboard.dismiss();
        // Add the amount to the right total if we have a valid number
        if (!Number.isNaN(amount) && amount > 0) {
            const newTotal = Number(amount) + Number(this.props[category]);
            // Update the context so our pie chart can get the new totals.
            this.props.updateContext({[category]: newTotal});
        } else {
            Alert.alert('Please enter a positive number.')
        }
        // Reset the textInput state to blank after adding amount
        this.setState({[category]: ''});
    };

    render() {
        return (

            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Header.HEIGHT + Constants.statusBarHeight}
                                  style={[{flex: 1}, {justifyContent: 'center'}]}>
                <ScrollView
                    style={{paddingTop: 20, margin: 0, padding: 0, ...styles[this.props.theme]}}
                    keyboardShouldPersistTaps={'handled'}>

                    <View>
                        <Text style={styles.buttonText}>Type Bill Amount, then Add Receipt</Text>
                        <View style={styles.row}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Bill Amount"
                                keyboardType='numeric'
                                onChangeText={(bills) => this.setState({bills})}
                                value={this.state.bills}
                            />
                            <TouchableHighlight
                                style={styles.button}
                                onPress={this.addReceipt('bills', this.state.bills)}
                            >
                                <Text style={styles.receiptText}>
                                    Add Receipt
                                </Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                    <View>
                        <Text style={styles.buttonText}>Type Food Amount, then Add Receipt</Text>

                        <View style={styles.row}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Food Amount"
                                keyboardType='numeric'
                                onChangeText={food => this.setState({food})}
                                value={this.state.food}
                            />
                            <TouchableHighlight
                                style={styles.button}
                                onPress={this.addReceipt('food', this.state.food)}
                            >
                                <Text style={styles.receiptText}>
                                    Add Receipt
                                </Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                    <View>
                        <Text style={styles.buttonText}>Type Entertainment Amount, then Add Receipt</Text>

                        <View style={styles.row}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Ent Amount"
                                keyboardType='numeric'
                                onChangeText={(entertainment) => this.setState({entertainment})}
                                value={this.state.entertainment}
                            />
                            <TouchableHighlight
                                style={styles.button}
                                onPress={this.addReceipt('entertainment', this.state.entertainment)}
                            >
                                <Text style={styles.receiptText}>
                                    Add Receipt
                                </Text>
                            </TouchableHighlight>

                        </View>

                    </View>
                    <View style={{height: 60}}/>
                </ScrollView>
            </KeyboardAvoidingView>

        );
    }
}

export default mapContextToProps(LinksScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 50,
        color: 'blue',
        marginBottom: 40,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
    },
    receiptText: {
        fontSize: 15,
        color: 'blue',
        textAlign: 'center',
    },
    button: {
        height: 40,
        width: 100,
        borderColor: 'blue',
        borderWidth: 1,
        marginBottom: 30,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        width: 100,
        borderColor: 'blue',
        borderWidth: 1,
        marginBottom: 30,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        color: 'blue',
        fontSize: 15,
        textAlign: 'center'
    },
    lightblue: {
        backgroundColor: 'lightblue',
        color: 'white'
    },
    white: {
        backgroundColor: 'white',
        color: 'black'
    },
});
