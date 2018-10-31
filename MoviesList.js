import React from 'react'
import {View, FlatList, Text} from 'react-native'
import Row from './Row.js'



// const renderItem = obj => <Row {...obj.item} />		

const MoviesList = props => {
	const renderItem = ({item}) => <Row {...item} onSelectMovie={props.onSelectMovie}/>

	return (
		<FlatList
			renderItem = {renderItem}
 			data={props.movies}
		/>
	)
}

export default MoviesList



