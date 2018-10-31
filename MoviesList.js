import React from 'react'
import {View, FlatList, Text} from 'react-native'
import Row from './Row.js'



// const renderItem = obj => <Row {...obj.item} />
const renderItem = ({item}) => <Row {...item} />


		

const MoviesList = props => {
	return (
		<FlatList
			renderItem = {renderItem}
 			data={[{name: "a", date: 2018, genre: "Action", knownActor:"No idea", Rate:5}]}
		/>
	)
}

export default MoviesList



