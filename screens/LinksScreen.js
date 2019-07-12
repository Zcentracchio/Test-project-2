import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, ImageBackground, TouchableHighlight, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { white } from 'ansi-colors';
import {mapContextToProps} from '../components/AppContext';

class LinksScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        inputBills: null, inputFood: null, inputEntertainment: null
    };
}
  static navigationOptions = {
    title: 'Receipts',
  };
 
  render() {
    return (
        <View style={styles.container}>
            <View style={styles[this.props.theme]}>
                <Text style={styles.headerText}>Receipts:</Text>
                <Text style = {styles.buttonText}>Type Bill Amount, then press Enter</Text>
                
                <View style={styles.row}>
                    <TextInput                        
                            style={styles.textInput}
                            placeholder = "Bill Amount"
                            keyboardType='numeric'
                            onChangeText={(inputBills)=> this.setState({inputBills})}
                            value={this.state.inputBills}                    
                    />               
                    <TouchableHighlight
                        style={styles.button}                        
                            onPress ={()=>this.props.updateContext({bills: this.state.inputBills})}                     
                    >
                        <Text style={styles.buttonText}>
                            Enter
                        </Text>
                    </TouchableHighlight>        
                </View>

                <Text style = {styles.buttonText}>Type Food Amount, then press Enter</Text>

                <View style={styles.row}>
                    <TextInput                        
                            style={styles.textInput}
                            placeholder = "Food Amount"
                            keyboardType='numeric'
                            onChangeText={(inputFood)=> this.setState({inputFood})}
                            value={this.state.inputFood}                    
                    />               
                    <TouchableHighlight
                        style={styles.button}                        
                            onPress ={()=>this.props.updateContext({food: this.state.inputFood})}                     
                    >
                        <Text style={styles.buttonText}>
                            Enter
                        </Text>
                    </TouchableHighlight>        
                </View>

                <Text style = {styles.buttonText}>Type Entertainment Amount, then press Enter</Text>

                <View style={styles.row}>
                    <TextInput                        
                            style={styles.textInput}
                            placeholder = "Entertain Amount"
                            keyboardType='numeric'
                            onChangeText={(inputEntertainment)=> this.setState({inputEntertainment})}
                            value={this.state.inputEntertainment}                    
                    />               
                    <TouchableHighlight
                        style={styles.button}                        
                            onPress ={()=>this.props.updateContext({entertainment: this.state.inputEntertainment})}                     
                    >
                        <Text style={styles.buttonText}>
                            Enter
                        </Text>
                    </TouchableHighlight>        
                </View>
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
    marginBottom: 40,
},
row: {
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 10,
},
buttonText:{
    fontSize: 15,
    color: 'blue',
    textAlign: 'center',
},
button: {    
    height: 40,
    width: 150,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 30,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor:'white',
    justifyContent: 'center',
},
textInput: {
    height: 40,
    width: 150,    
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 30,
    marginHorizontal: 15,    
    borderRadius: 10,    
    backgroundColor:'white', 
    color: 'blue',
    fontSize: 15,
    textAlign: 'center'
},
lightblue: {
    flex: 1,
    backgroundColor: 'lightblue',
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
