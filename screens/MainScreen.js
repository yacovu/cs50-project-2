import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import MoviesList from '../MoviesList.js'
import {fetchMovies} from '../api.js'

export default class MainScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: "Home",
  });

  state = {
    input: null,
    detailedMovieList: [],
  }

  handleSearchInputChange = async input => {
    await this.setState({input})
    await this.setState({detailedMovieList: []})
        
    movieList = []
    pageNumber = 1
    results = await fetchMovies("s=" + this.state.input + "&page=" + pageNumber)

    while (results.Response === "True") {
      additionalDeatils = await this.fetchAdditionalDeatils(results)
      movieList = [...movieList, ...additionalDeatils] 
      pageNumber = await pageNumber + 1
      results = await fetchMovies("s=" + this.state.input + "&page=" + pageNumber)
    } 
    await this.setState({detailedMovieList: movieList})
  }

  fetchAdditionalDeatils = async (movieList) => {
    try{

      return await Promise.all(
        movieList.Search.map(async movie => {
        const imdbID = movie.imdbID
        const results = await fetchMovies("i=" + imdbID)
        return results
        }))     
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
             movies={this.state.detailedMovieList}
             onSelectMovie={selectedMovie => {
              this.state.detailedMovieList.map(movie => {
                if (selectedMovie.Title === movie.Title) {
                  this.props.navigation.navigate("MovieDetails",{movie})
                }
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