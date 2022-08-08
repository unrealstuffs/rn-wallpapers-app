import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FeedScreen = () => {
	return (
		<View style={styles.center}>
			<Text>FeedScreen</Text>
		</View>
	)
}

export default FeedScreen

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
