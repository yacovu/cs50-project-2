import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen.js'
import MovieDetailsScreen from './screens/MovieDetailsScreen.js'


const AppNavigator = createStackNavigator({
    Main: MainScreen,
    MovieDetails: MovieDetailsScreen
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
