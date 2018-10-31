import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MoviesList from '../MoviesList.js'

export default class MainScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: "Movies",
    headerRight: <Button title="Search" onPress={() => navigation.navigate("Search")} />,
  });

   render() {
    return (
      <View>
         <MoviesList 
         movies={[{name: "Hunter Killer", date: 2018, genre: "Action", knownActor:" Gerard Butler", Rate:6.9},
                  {name: "Casino Royale", date: 2006, genre: "Action", knownActor:" Daniel Craig", Rate:8}
                  ]}
         onSelectMovie={(movie) => {alert("here"); this.props.navigation.navigate("MovieDetails",  {name: movie.name,
                                                                                   data: movie.data});
       }}
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
});