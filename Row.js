import React from 'react'
import {Text, View, StyleSheet} from 'react-native'  
import { createStackNavigator } from 'react-navigation';
import MovieDetailsScreen from './screens/MovieDetailsScreen.js'

export default class Row extends React.Component {

	static MovieNavigator = createStackNavigator ({
		MovieDetails: MovieDetailsScreen
	})



	// const Row = props => (
	//   <View>
	//     <Text onPress={() => handleShowMovieDetails(props)}>
	//     	{props.name}
	// 	</Text>
	//   </View>
	// )

  	render() {
  		console.log(this.props)
	    return (
	      <View>
		    <Text onPress={() => this.props.navigation.navigate("MovieDetails")}>
		    	{this.props.name}
			</Text>
		  </View>
	    );
 	 }

	// const Row = props => (
	//   <View>
	//     <Text onPress={() => props.navigation.navigate("MovieDetails")}>
	//     	{props.name}
	// 	</Text>
	//   </View>
	// )

	// handleShowMovieDetails = movie  => {

		/*
		<MovieNavigator screenProps={
			{
				movieName: movie.name,
				movieReleaseDate: movie.date,
				movieGenre: movie.genre,
				movieKnownActor: movie.knownActor,
				movieRate: movie.Rate,
			}
		}
		/>*/
	// }
}

const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	  },
  });

  