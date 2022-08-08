import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import images from '../constants/images'
import Card from '../ui/Card'

const FavScreen = () => {
	return (
		<View style={styles.container}>
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

export default FavScreen

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
})
