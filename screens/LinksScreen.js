import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {mapContextToProps} from '../components/AppContext';



  export default class LinksScreen extends React.Component {
    static navigationOptions = {
      title: 'Links',
    };

  render() {
    return (
      <View style={styles[this.props.theme]}>
        <Text style={styles[this.props.theme] }>Hi</Text>
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
});
