import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { EvilIcons } from '@expo/vector-icons'

import BrowseScreen from '../screens/BrowseScreen'
import FavScreen from '../screens/FavScreen'
import FeedScreen from '../screens/FeedScreen'

const Tab = createBottomTabNavigator()

const Navigation = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarActiveBackgroundColor: '#333',
					tabBarInactiveBackgroundColor: '#333',
				}}
			>
				<Tab.Screen
					name='Feed'
					component={FeedScreen}
					options={{
						tabBarIcon: () => (
							<EvilIcons name='image' size={28} color='#fff' />
						),
					}}
				/>
				<Tab.Screen
					name='Browse'
					component={BrowseScreen}
					options={{
						tabBarIcon: () => (
							<EvilIcons name='search' size={28} color='#fff' />
						),
					}}
				/>
				<Tab.Screen
					name='Favourites'
					component={FavScreen}
					options={{
						tabBarIcon: () => (
							<EvilIcons name='star' size={28} color='#fff' />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
