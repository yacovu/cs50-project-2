import React from 'react'
import {Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'

 const Row = props => {
 	return(
 	<TouchableOpacity onPress={() => props.onSelectMovie(props)}>
		 <View>	
		 	<View style={styles.inline} >				 
	   		 
	   		   <Image source={{uri:props.Poster}}
	                  style={styles.image}/> 		        
	   		  <Text> {props.Title} {"\n"} {props.Year} ({props.Type}) {"\n"} </Text>	   		  
	   		</View>	   		 
		 </View>
	 </TouchableOpacity>
)}

 export default Row 


 var styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
  inline: {
  flexDirection: 'row'
  }
});