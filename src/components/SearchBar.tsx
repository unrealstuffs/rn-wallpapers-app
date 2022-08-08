import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = () => {
	return (
		<View>
			<TextInput style={styles.input} placeholder='Search...' />
		</View>
	)
}

export default SearchBar

const styles = StyleSheet.create({
	input: {
		backgroundColor: '#ddd',
		padding: 10,
		borderRadius: 6,
		fontSize: 18,
		marginTop: 10,
		marginBottom: 20,
	},
})
