import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';
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

  // componentDidMount() {
  //   this.getMovies()
  // }
  
  // getMovies = async (param) => {
  //   const results = await fetchMovies()
  //   this.setState({movies: results})
  //   console.log(this.state.movies)
  // }

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
    await console.log("results at main screen : ")
    await console.log(this.state.movies.Search)
    await this.fetchAdditionalDeatils()
  }

  fetchAdditionalDeatils = async () => {
    this.state.movies.Search.map(async movie => {
      const imdbID = movie.imdbID
      const results = await fetchMovies("i=" + imdbID)
      console.log("results at map:")
      console.log(results)
      await this.setState(prevState => ({additionalDetails: [...prevState.additionalDetails, results]}))
      await console.log("additional array: ")
       await console.log(this.state.additionalDetails)
    })
    
  }

  // getAdditionDetails = async imdbID => {
  //   const results =  await fetchMovies("i=" + imdbID)
  //   console.log("getAdditionDetails : ")
  //   console.log(results)
  //   await this.setState({additionalDetails: {Plot: results.Plot,
  //                                             Rated: results.Rated,
  //                                             Runtime: results.Runtime,
  //                                             Ratings: results.Ratings}})
  //   console.log("additionalDetails at getAdditionDetails : ")
  //             console.log(this.state.additionalDetails)
  // }

  render() {
    console.log("results at render : " + JSON.stringify(this.state.movies))
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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