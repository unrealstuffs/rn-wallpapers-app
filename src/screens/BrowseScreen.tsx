import { FlatList, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import images from '../constants/images'
import Card from '../ui/Card'
import Title from '../ui/Title'

interface ICard {
	id: string
	previewUrl: string
	largeImageUrl: string
}

const BrowseScreen = () => {
	const formatData = (data: ICard[], numColumns: number) => {
		const numberOfFullRows = Math.floor(data.length / numColumns)

		let numberOfElementsLastRow =
			data.length - numberOfFullRows * numColumns
		while (
			numberOfElementsLastRow !== numColumns &&
			numberOfElementsLastRow !== 0
		) {
			data.push({
				id: `blank-${numberOfElementsLastRow}`,
				previewUrl: '',
				largeImageUrl: '',
			})
			numberOfElementsLastRow++
		}

		return data
	}

	return (
		<View style={styles.container}>
			<SearchBar />
			<Title>Editor's choise</Title>
			<FlatList
				data={images}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <Card key={item.id} image={item} />}
				horizontal={false}
				numColumns={3}
			/>
		</View>
	)
}

export default BrowseScreen

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
})
