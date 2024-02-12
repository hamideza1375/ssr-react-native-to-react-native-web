import React from 'react'
import { View, Text } from 'react-native'
import { Helmet } from 'react-helmet';
// import {createNativeStackNavigator} from "@react-navigation/native-stack";

const SSR = () => {
	return (
			<div className="application">
				<Helmet>
				<meta name="description" content="دیجیکالا موبایل تبلت تلوزیون هدفون هنزفیری"/>
					<title>My Title</title>
					<link rel="canonical" href="http://mysite.com/example" />
				</Helmet>

				<View>
					<Text style={{ cursor: 'pointer' }} onClick={() => alert(9)} >SSR SSR SSR</Text>
					<Text>SSR SSR SSR</Text>
				</View>
			</div>
	)
}


export default SSR