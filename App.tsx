import { View } from 'react-native'

import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { useCallback, useEffect, useState } from 'react'
import Navigation from './src/navigation/Navigation'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false)

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync({
					'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
					'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
				})
			} catch (error) {
				console.error(error)
			} finally {
				setAppIsReady(true)
			}
		}
		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<Navigation />
		</View>
	)
}
