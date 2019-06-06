import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, ImageBackground, TouchableHighlight } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { white } from 'ansi-colors';
import {mapContextToProps} from '../components/AppContext';

class LinksScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        inputValue: "Input Text!",
    }
}
  static navigationOptions = {
    title: 'Receipts',
  };
  _handleTextChange = inputValue => {
    this.setState({ inputValue });
};
  render() {
    return (
        <View style={styles.container}>
            <View style={styles[this.props.theme]}>
                <Text style={styles.headerText}>Receipts:</Text>
                <TextInput
                        value={this.state.inputValue}
                        onChangeText={this._handleTextChange}
                        style={styles.textInput}
                />
                <View style={styles.row}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => { 
                            alert('You Should Get Your Bills Reciepts!') 
                        }}
                    >
                        <Text style={styles.buttonText}>
                            Bills
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => { 
                            alert('You Should Get Your Food Reciepts!') 
                        }}
                    >
                        <Text style={styles.buttonText}>
                            Food
                        </Text>
                    </TouchableHighlight>        
                </View>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => { 
                    alert('You Should Get Your Entertainment Reciepts!') 
                     }}
                >
                    <Text style={styles.buttonText}>
                        Entertainment
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    );
  }
}

export default mapContextToProps(LinksScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
   },
headerText:{
    fontSize:50,
    color:'blue',
},
row: {
    flexDirection: 'row',
    marginTop: 15,
},
buttonText:{
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
},
button: {
    marginBottom: 50,
    height: 40,
    width: 150,
    borderColor: 'blue',
    borderWidth: 1,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor:'white',
    justifyContent: 'center',
},
textInput: {
    width: 250,
    height: 44,
    padding: 8,
    borderColor: 'blue',
    borderWidth: 1,
    marginTop: 10,
    color: 'blue',
    borderRadius: 10,
    marginBottom: 30,
    backgroundColor:'white', 
    fontSize: 20,
    textAlign: 'center'
},
pink: {
    flex: 1,
    backgroundColor: 'pink',
    color: 'white',
    alignItems: 'center',
},
white: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
    alignItems: 'center',
},
});
