import React from 'react'
import {View, FlatList, Text} from 'react-native'
import Row from './Row.js'



// const renderItem = obj => <Row {...obj.item} />		

const MoviesList = props => {
	console.log("props at MoviesList : " + JSON.stringify(props))
	const renderItem = ({item}) => <Row {...item} onSelectMovie={props.onSelectMovie}/>
	const arr = [props.movies]
	// console.log("props.movies : " + JSON.stringify(props.movies))
	console.log("arr : " +JSON.stringify(arr))
	
	if (props.movies && props.movies.Response === "True") {
		console.log("porps.movies")
		console.log(props.movies)
		return (
			<FlatList
				renderItem = {renderItem}
	 			data={props.movies.Search}
			/>
		)
	}
	return (
		<View>
	   		 <Text> No results</Text>
		 </View>
	)

}

export default MoviesList



