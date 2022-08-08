import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

interface ICard {
	image: {
		id: string
		previewUrl: string
		largeImageUrl: string
	}
}

const Card: FC<ICard> = ({ image }) => {
	return (
		<View style={styles.card}>
			<ImageBackground
				source={{
					uri: 'http://placekitten.com/720/1280',
				}}
				style={styles.img}
			></ImageBackground>
		</View>
	)
}

export default Card

const styles = StyleSheet.create({
	card: {
		flex: 1,
		height: 200,
		margin: 1,
	},
	img: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
})
