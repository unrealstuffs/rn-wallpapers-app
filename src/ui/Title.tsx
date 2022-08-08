import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

const Title: FC = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
	title: {
		fontFamily: 'OpenSans-Bold',
		fontSize: 20,
		marginBottom: 10,
	},
})
