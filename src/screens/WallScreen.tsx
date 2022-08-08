import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WallScreen = () => {
	return (
		<View style={styles.center}>
			<Text>WallScreen</Text>
		</View>
	)
}

export default WallScreen

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
