import { WebBrowser } from 'expo';
import React, {Fragment} from 'react';
import { ImageBackground, Platform, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import { Constants } from 'expo';
import { PieChart } from 'react-native-svg-charts';
import 'react-native-svg'; 


export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        balance: "",
    }
}

  render() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0,7);
    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => (
        {
          value, 
          svg: {
            fill: randomColor(),
            onPress: () => Alert.alert(`Pie slice ${index} clicked`),
          },
          key: `pie-${index}`
      }
      ));
    return (
      <View style={styles.imageContainer}>
        <ImageBackground source={require('../assets/images/budget-Screen.png')} style={{width: '100%', height: '100%'}}>

              <View style={styles.getStartedContainer}>
                {this._maybeRenderDevelopmentModeWarning()}

              <Text style={styles.budgetText}>Your Budget</Text>
              </View>
              <Text style={style.balanceText}>{this.state.balance}</Text>
             <View style={styles.pieChart}>
              <Fragment>
        <Text style={styles.paragraph}>{'Budget Diagram'}</Text>
        <PieChart style={{ height: 200 }} data={pieData} />
      </Fragment>
      </View>

          <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Tap On The Tabs For Budget Details:</Text>
          </View>
          
        </ImageBackground>
      </View>
      
    
      
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  imageContainer: {
justifyContent: 'space-around',
  },
  
  pieChart: {
marginTop: 150,
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
    color: 'rgba(96,100,109, 1)',
    lineHeight: 36,
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  balanceText: {
    fontSize: 36,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 36,
    textAlign: 'center',
    justifyContent: 'space-around',
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
});
