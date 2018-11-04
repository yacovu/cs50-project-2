import React from 'react'
import {Text, View, TouchableOpacity, Image } from 'react-native'

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

 export default Row 