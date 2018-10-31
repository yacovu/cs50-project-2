import React from 'react'
import {View, FlatList, Text} from 'react-native'
import Row from './Row.js'



// const renderItem = obj => <Row {...obj.item} />
const renderItem = ({item}) => <Row {...item} />


		

const MoviesList = props => {
	return (
		<FlatList
			renderItem = {renderItem}
 			data={[{name: "Hunter Killer", date: 2018, genre: "Action", knownActor:" Gerard Butler", Rate:6.9},
 					{name: "Casino Royale", date: 2006, genre: "Action", knownActor:" Daniel Craig", Rate:8}]}
		/>
	)
}

export default MoviesList



