import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {mapContextToProps} from '../components/AppContext';



  class LinksScreen extends React.Component {
    static navigationOptions = {
      title: 'Links',
    };

  render() {
    return (
        <View style={[styles.container, styles[this.props.theme]]}>
        <Text>{this.props.theme}</Text>
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
  },
  dark: {backgroundColor: 'black'},
  light: {backgroundColor: 'white'}
});
