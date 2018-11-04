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
    const result = null

    //TODO: loop
    pageNumber = 1

    results = await fetchMovies("s=" + this.state.input + "&page=" + pageNumber)

    // await this.setState(prevState => ({movies: [...prevState.movies, results]}))
    await this.setState({movies: results})
    await this.fetchAdditionalDeatils()
  }

  fetchAdditionalDeatils = async () => {
    try{
      console.log("movies: ")
      console.log(this.state.movies)

      if (this.state.movies.Response === "True") {
        this.state.movies.Search.map(async movie => {
          const imdbID = movie.imdbID
          const results = await fetchMovies("i=" + imdbID)
          await this.setState(prevState => ({additionalDetails: [...prevState.additionalDetails, results]}))
        })
      }
      else {
        this.setState(prevState => ({additionalDetails: []}))
      }

      // this.state.movies.map(searchResult => {
      //   if (searchResult.Response === "True") {
      //     searchResult.Search.map(async movie => {
      //     const imdbID = movie.imdbID
      //     const results = await fetchMovies("i=" + imdbID)
      //     await this.setState(prevState => ({additionalDetails: [...prevState.additionalDetails, results]}))
      //   })
      //   }       
      // })


      // this.state.movies.Search.map(async movie => {
      //   const imdbID = movie.imdbID
      //   const results = await fetchMovies("i=" + imdbID)
      //   await this.setState(prevState => ({additionalDetails: [...prevState.additionalDetails, results]}))
      // }) 
    }
    catch (error) {
      console.log("error at MainScreen:fetchAdditionalDeatils: " + error)
    }
  }

  render() {
    console.log("movies : ")
    console.log(this.state.movies)
        console.log("additionalDetails : ")
    console.log(this.state.additionalDetails)
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