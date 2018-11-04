import React from 'react'
import {Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'

 const Row = props => {
 	return(
 	<TouchableOpacity onPress={() => props.onSelectMovie(props)}>
		 <View style={styles.yearText}>					 
	   		 <Text  > 
	   		   <Image source={{uri:props.Poster}}
	                  style={styles.image}/> 		        
	   		  {props.Title} {"\n"}
	   		  <Text> {props.Year} ({props.Type}) {"\n"} </Text>
	   		  </Text>
	   		 
		 </View>
	 </TouchableOpacity>
)}

 export default Row 


 var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 40,
    marginHorizontal: 10,
  },
  image: {
    width: 30,
    height: 30,
    // flexDirection: 'row'
  },
  yearText: {
  flexDirection: 'row'
  }
});