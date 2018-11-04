import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MovieDetailsScreen extends React.Component {
   static navigationOptions = ({navigation}) => ({
      headerTitle: navigation.getParam("movie").Title,
    });



	// static navigationOptions = ({navigation}) => {

	// 	//TODO: change from Movie details to ${Movie Name} Details
	//     headerTitle: "Movie Details",
 // 	 }

	render() {
    console.log("params at Moviedetails render:")
    console.log(this.props.navigation.getParam("movie"))
    const movie = this.props.navigation.getParam("movie")
    return (
      <View>
         <Text> {movie.Title} </Text>
         <Text> ({movie.Year}) {"\n"} </Text>
         <Text> {movie.Rated}, {movie.Runtime} {"\n"} </Text>
         <Text> {movie.Plot} {"\n"} </Text>
         <Text> {movie.Ratings.map(rating => rating.Source + "\n" + rating.Value + "\n \n")} </Text>

      </View>
    );
  }
}

