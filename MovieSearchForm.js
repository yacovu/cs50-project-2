import React from 'react';
import {Button, TextInput, SafeAreaView, View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import Row from './Row.js'


export default class MovieSearchForm extends React.Component {


state = {
    name: null,
    date: null,
    genre: null,
    knownActor: null,
    rate: null,

	}

  getHandler = key => {
    return 
      val => {
        this.setState({[key]:val})
      }
  }

  handleSearch = () => {

  }

  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TextInput style={styles.input} placeholder={"Movie Name"} value={this.state.movieName} onChangeText={this.getHandler("name")} />
          <TextInput style={styles.input} placeholder={"Release Date"} value={this.state.movieName} keyboardType="numeric" onChangeText={this.getHandler("date")} />
          <TextInput style={styles.input} placeholder={"Genre"} value={this.state.movieName} onChangeText={this.getHandler("genre")} />
          <TextInput style={styles.input} placeholder={"Known Actor"} value={this.state.movieName} onChangeText={this.getHandler("knownActor")} />
          <TextInput style={styles.input} placeholder={"Rate"} value={this.state.movieName} onChangeText={this.getHandler("rate")} />
          <Button title={"Search"} onPress={this.handleSearch} />
        </KeyboardAvoidingView>
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

