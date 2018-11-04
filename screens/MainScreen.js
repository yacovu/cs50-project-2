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
    movies: null,
    additionalDetails: [],
  }

  handleSearchInputChange = async input => {
    await this.setState({input})
    const result = null

    if (+this.state.input) {
      results = await fetchMovies("y=" + this.state.input)
    }
    else {
      results = await fetchMovies("s=" + this.state.input)
    }
    await this.setState({movies: results})
    await this.fetchAdditionalDeatils()
  }

  fetchAdditionalDeatils = async () => {
    this.state.movies.Search.map(async movie => {
      const imdbID = movie.imdbID
      const results = await fetchMovies("i=" + imdbID)
      await this.setState(prevState => ({additionalDetails: [...prevState.additionalDetails, results]}))
    }) 
  }

  render() {
    return (
      <View>
         <TextInput style={styles.input} placeholder={"Search..."} value={this.state.input} onChangeText={this.handleSearchInputChange} />
           <MoviesList
             movies={this.state.movies}
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