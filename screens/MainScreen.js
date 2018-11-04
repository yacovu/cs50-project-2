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
    movies: [],
    additionalDetails: [],
  }

  handleSearchInputChange = async input => {
    await this.setState({input})
    await this.setState({additionalDetails: []})
    const result = null

    pageNumber = 1
    results = await fetchMovies("s=" + this.state.input + "&page=" + pageNumber)

      
    while (results.Response === "True") {
      await this.setState({movies: results})
      await this.fetchAdditionalDeatils()
      pageNumber = await pageNumber + 1
      results = await fetchMovies("s=" + this.state.input + "&page=" + pageNumber)
    }
      
  }

  fetchAdditionalDeatils = async () => {
    try{
      if (this.state.movies.Response === "True") {
        this.state.movies.Search.map(async movie => {
          const imdbID = movie.imdbID
          const results = await fetchMovies("i=" + imdbID)
          await this.setState(prevState => ({additionalDetails: [...prevState.additionalDetails, results]}))
        })
      }
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
             movies={this.state.additionalDetails}
             onSelectMovie={selectedMovie => {
              this.state.additionalDetails.map(movie => {
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