import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class MovieDetailsScreen extends React.Component {
   static navigationOptions = ({navigation}) => ({
      headerTitle: navigation.getParam("movie").Title,
    });

	render() {    
    const movie = this.props.navigation.getParam("movie")

    return (
      <View>

        <Image source={{uri:movie.Poster}}
               style={styles.image} 
        />      
         <Text style={styles.textTitle}>{movie.Title} </Text>
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
  image: {
    width: 400,
    height: 400,
  },
  textYear: {
    textAlign:'right'
  }
});



