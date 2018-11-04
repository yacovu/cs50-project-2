import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MovieDetailsScreen extends React.Component {
   static navigationOptions = ({navigation}) => ({
      headerTitle: navigation.getParam("Title"),
    });



	// static navigationOptions = ({navigation}) => {

	// 	//TODO: change from Movie details to ${Movie Name} Details
	//     headerTitle: "Movie Details",
 // 	 }

	render() {
    console.log("params:")
    console.log(this.props.navigation.getParam("rated"))
    return (
      <View>
         <Text> {this.props.navigation.getParam("Title")} </Text>
         <Text> ({this.props.navigation.getParam("Year")}) {"\n"} </Text>
         <Text> {this.props.navigation.getParam("Rated")}, {this.props.navigation.getParam("runtime")} {"\n"} </Text>
         <Text> {this.props.navigation.getParam("Plot")} {"\n"} </Text>
         

      </View>
    );
  }
}

// <Text> {this.props.navigation.getParam("ratings").map(rate => rate.Source + "\n" + rate.Value + "\n \n")} </Text>