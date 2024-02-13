import React from 'react'
import Home from './components/Home'
import SSR from './components/SSR'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator()

const App = (prop) => {
	return (
		<Tab.Navigator >
			<Tab.Screen initialParams={{ key: 'home' }} name="Home" options={{ title: 'Home Title' }} component={Home} />
			<Tab.Screen initialParams={{ key: 'ssr' }} name="SSR" options={{ title: 'SSR Title' }} children={(props)=><SSR {...props} />} />
			<Tab.Screen name="NotFound"  >{() => (<h2 style={{color:'red', width:70, margin:"0 auto"}} >404</h2>)}</Tab.Screen>
		</Tab.Navigator>
	)
}

export default App