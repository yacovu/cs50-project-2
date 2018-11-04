import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

 const Row = props => {
console.log("props at row")
console.log(props)
 	return(
 	<TouchableOpacity onPress={() => props.onSelectMovie(props)}>
		 <View>		 	 
	   		 <Text> {props.Title}</Text>
	   		 <Text> {props.Year} ({props.Type}) {"\n"}</Text>
		 </View>
	 </TouchableOpacity>
)}


 const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	  },
  });

 export default Row 