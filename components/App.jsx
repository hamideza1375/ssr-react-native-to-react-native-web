import React from 'react'
import Home from './Home'
import SSR from './SSR'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const App = ({url}) => {

if(url === '/ssr') return <SSR/>
if(url === '/home') return <Home/>

// const Tab = createNativeStackNavigator()


// return <Tab.Navigator>

// <Tab.Screen name="Client" options={{ title: 'دیجی کالا', headerShown: false }} >{() =>
// 		<Tab.Navigator initialRouteName="Home" screenOptions={{ statusBarColor: '#d29', headerShown: false }}>
// 				<Tab.Screen initialParams={{ key: 'home' }} name="Home" options={{ title: 'دیجی کالا', headerShown: false }} >{()=><Home/>}</Tab.Screen>
// 				<Tab.Screen initialParams={{ key: 'ssr' }} name="Products" options={{ title: 'محصولات', headerShown: false }} >{()=><SSR/>}</Tab.Screen>
// 		</Tab.Navigator>}
// </Tab.Screen>

// </Tab.Navigator >


}


export default App