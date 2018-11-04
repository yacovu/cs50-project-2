import React from 'react'
import {View, FlatList, Text} from 'react-native'
import Row from './Row.js'


const MoviesList = props => {
	const renderItem = ({item}) => <Row {...item} onSelectMovie={props.onSelectMovie} {...item.key}/> 
	if (props.movies && props.movies.length > 0) {
		return (
			<FlatList
				renderItem = {renderItem}
	 			data={props.movies}
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



