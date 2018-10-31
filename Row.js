import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native'

 const Row = props => (
 	<TouchableOpacity onPress={() => {props.onSelectMovie}}>
		 <View>
	   		 <Text> {props.name}</Text>
		 </View>
	 </TouchableOpacity>
)


 const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	  },
  });

 export default Row 