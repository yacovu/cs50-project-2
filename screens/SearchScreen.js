import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MovieSearchForm from '../MovieSearchForm.js'

export default class SearchScrren extends React.Component {
  static navigationOptions = {
    heaerTitle: "Search"
  };


  render() {
    return (
      <View style={styles.container}>
       <MovieSearchForm/>
      </View>
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