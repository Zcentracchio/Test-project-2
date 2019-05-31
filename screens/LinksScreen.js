import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, ImageBackground, TouchableHighlight } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { white } from 'ansi-colors';

export default class LinksScreen extends React.Component {
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
                    style={{ width: 250, height: 44, padding: 8, borderColor: 'black', borderWidth: 1, marginTop: 10, color: 'black', borderRadius: 10, marginBottom: 30}}
                />
        <View style={styles.row}>
        <TouchableHighlight
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Bills
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                    Entertainment
                    </Text>
                </TouchableHighlight>
          
          </View>
          <TouchableHighlight
                    style={styles.button}
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
    color: 'white',
  },
  imgBackground:{
    alignItems: 'center',
    flex: 1,
},
headerText:{
    fontSize:50,
    color:'black'
},
row: {
    flexDirection: 'row',
    marginTop: 15,
},
buttonText:{
    fontSize: 24,
},
button: {
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 5,
    color: 'black',
    borderRadius: 10,
},
});
