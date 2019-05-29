import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, ImageBackground } from 'react-native';
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
        <TextInput
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 250, height: 44, padding: 8, borderColor: 'darkblue', borderWidth: 1, marginTop: 10, color: 'black'}}
                />
          <Text>Reciepts:</Text>
          <Text>Bills:</Text>
          <Text>Entertainment:</Text>
          <Text>Food:</Text>
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
});
