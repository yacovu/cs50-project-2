import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Movies",
    headerRight: <Button title="Search" onPress={this.handleSearchClick} />
  };

  handleSearchClick = () => {

  }


   render() {
    return (
      <View>
        
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