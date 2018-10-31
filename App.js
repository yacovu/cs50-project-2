import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SearchScreen from './screens/SearchScreen.js'
import MainScreen from './screens/MainScreen.js'


const AppNavigator = createStackNavigator({
    Main: MainScreen,
    Search: SearchScreen,
  },
  {
    initialRouteName: "Main",
  }
);


export default class App extends React.Component {
  



  render() {
    return (

        <AppNavigator/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
