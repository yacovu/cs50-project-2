import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import MoviesList from '../MoviesList.js'
import {fetchMovies} from '../api.js'

export default class MainScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: "Home",
  });

  state = {
    moviesToBeShownInHomeScreen: null,
    input: null,
    detailedMovieList: [],
  }

  handleSearchInputChange = async input => {
    await this.setState({input})
    await this.setState({detailedMovieList: []})
        
    
    pageNumber = 1
    moviesList = []
    results = await fetchMovies("s=" + this.state.input + "&page=" + pageNumber)
    while (results.Response === "True") {
      moviesList = [...moviesList, ...results.Search]         
      pageNumber = await pageNumber + 1
      results = await fetchMovies("s=" + this.state.input + "&page=" + pageNumber)
    } 
    this.setState({moviesToBeShownInHomeScreen: moviesList})
  }

  fetchAdditionalDeatils = async (movie) => {
    try{
      const imdbID = movie.imdbID
      const result = await fetchMovies("i=" + imdbID)
      return result
    }
    catch (error) {
      console.log("error at MainScreen:fetchAdditionalDeatils: " + error)
    }
  }

  render() {

    return (
      <View>
         <TextInput style={styles.input} placeholder={"Search..."} value={this.state.input} onChangeText={this.handleSearchInputChange} />
           <MoviesList
             movies={this.state.moviesToBeShownInHomeScreen}
             onSelectMovie={selectedMovie => {
              this.fetchAdditionalDeatils(selectedMovie)
              .then( movie => {
                this.props.navigation.navigate("MovieDetails", {movie})
                })
            }
          }
         />         
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
});