import React from 'react'
import {View, FlatList, Text} from 'react-native'
import Row from './Row.js'


const MoviesList = props => {
	const renderItem = ({item}) => <Row {...item} onSelectMovie={props.onSelectMovie}/>
	const arr = [props.movies]
	
	if (props.movies && props.movies.Response === "True") {
		return (
			<FlatList
				renderItem = {renderItem}
	 			data={props.movies.Search}
			/>
		)
	}
	return (
		<View>
	   		 <Text> No results </Text>
		 </View>
	)
}

export default MoviesList



