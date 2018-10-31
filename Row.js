import React from 'react'
import {Text, View, StyleSheet} from 'react-native'  

const Row = props => (
  <View>
    <Text onPress={() => handleShowMovieDetails(props.name)}>
    	Name: {props.name}
	</Text>
  </View>
)

const handleShowMovieDetails = () => {

}

const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	  },
  });

export default Row

  // <Text>Release Date: {props.date}</Text>
  //   <Text>Genre: {props.genre}</Text>
  //   <Text>Known Actor: {props.knownActor}</Text>
  //   <Text>Rate: {props.Rate}/5</Text>