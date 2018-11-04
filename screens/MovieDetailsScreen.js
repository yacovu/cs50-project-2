import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
    console.log(movie.Poster)
    return (
      <View>
         <Image source={{uri: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"}} />
         <Text style={styles.textTitle}> {movie.Title} </Text>
         <Text style={styles.textYear}> ({movie.Year}) {"\n"} </Text>
         <Text> {movie.Rated}, {movie.Runtime} {"\n"} </Text>
         <Text> {movie.Plot} {"\n"} </Text>
         <Text> {movie.Ratings.map(rating => rating.Source + "\n" + rating.Value + "\n \n")} </Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  textTitle: {
    color: 'black',
    fontSize: 25, 
    fontWeight: 'bold'
  },
  textYear: {
    textAlign:'right'
  }
});



