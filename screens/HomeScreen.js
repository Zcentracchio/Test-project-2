import { WebBrowser } from 'expo';
import React, {Fragment} from 'react';
import { ImageBackground, Platform, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import { Constants } from 'expo';
import { PieChart } from 'react-native-svg-charts';
import 'react-native-svg'; 
import {mapContextToProps} from '../components/AppContext';


class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        
    }
}

  render() {
    const data = [Number(this.props.bills), Number(this.props.food), Number(this.props.entertainment)];
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0,7);
    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => (
        {
          value, 
          svg: {
            fill: randomColor(),
            onPress: () => {if(index==0)
                              {Alert.alert('Total Bills = $'+(Number(this.props.bills)).toFixed(2))}
                            else if (index==1)
                              {Alert.alert('Total Food = $'+(Number(this.props.food)).toFixed(2))}
                              else {Alert.alert('Total Entertainment = $'+(Number(this.props.entertainment)).toFixed(2))}
              },
          },
          key: `pie-${index}`
      }
      ));
    return (
      <View style={styles.container}>
        <View style={styles[this.props.theme]}>              
            <Text style={styles.budgetText}>Total Expenditures</Text>
          
            <Text style={styles.balanceText}>{'$'+(Number(this.props.bills)+Number(this.props.food)+Number(this.props.entertainment)).toFixed(2)}</Text>
            <View style={styles.pieChart}>
              <Fragment>
                <Text style={styles.paragraph}>{'Touch slice to see category and amount'}</Text>
                <PieChart style={{ height: 200 }} data={pieData} />
              </Fragment>
            </View>
          </View>
      </View>      
    );
  }
}

export default mapContextToProps(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
  },
  imageContainer: {
    justifyContent: 'space-around',
  },  
  pieChart: {
    marginTop: 35,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 50,
    marginTop: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  budgetText: {
    fontSize: 36,
    color: 'black',
    lineHeight: 36,
    marginTop: 10,
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  balanceText: {
    fontSize: 36,
    color: 'black',
    lineHeight: 36,
    textAlign: 'center',
    justifyContent: 'space-around',
    marginTop: 50,
  },

  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
