import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {mapContextToProps} from '../components/AppContext';



  export default class LinksScreen extends React.Component {
    static navigationOptions = {
      title: 'Links',
    };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Hi</Text>
      </ScrollView>
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
