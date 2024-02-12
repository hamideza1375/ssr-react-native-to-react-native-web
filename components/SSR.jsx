import React from 'react'
import { View, Text } from 'react-native'
import ServerContainer from "@react-navigation/native/lib/commonjs/ServerContainer";

const SSR = () => {
	return (
		<ServerContainer location={{ pathname: '/ssr', search: '' }}>
			<View>
				<Text style={{ cursor: 'pointer' }} onClick={() => alert(9)} >SSR SSR SSR</Text>
				<Text>SSR SSR SSR</Text>
			</View>
		</ServerContainer>
	)
}


export default SSR