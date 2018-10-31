import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MovieDetailsScreen extends React.Component {
	static navigationOptions = {

		//TODO: change from Movie details to ${Movie Name} Details
	    headerTitle: "Movie Details",
 	 }

	render() {
    return (
      <View>
         <Text> Movie Details Screen </Text>
      </View>
    );
  }
}
