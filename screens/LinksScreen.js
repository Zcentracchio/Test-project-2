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
        <ImageBackground
         style={styles.imgBackground}
                    source={require('../assets/images/receipts-Screen.png')}
                >
        <Text style={styles.headerText}>Receipts:</Text>
        <TextInput
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 250, height: 44, padding: 8, borderColor: 'blue', borderWidth: 1, marginTop: 10, color: 'blue', borderRadius: 10, marginBottom: 30, backgroundColor:'white', fontSize: 28,}}
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
                        alert('You Should Get Your Entertainment Reciepts!')
                    }}
                >
                    <Text style={styles.buttonText}>
                    Entertainment
                    </Text>
                </TouchableHighlight>

          </View>
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
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  imgBackground:{
    alignItems: 'center',
    flex: 1,
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
    fontSize: 28,
    color: 'blue',
},
button: {
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 200,
    borderColor: 'blue',
    borderWidth: 1,
    marginHorizontal: 5,
    color: 'blue',
    borderRadius: 10,
    backgroundColor:'white',
},
});

export default mapContextToProps(LinksScreen);

