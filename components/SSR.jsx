import React, { useCallback, useState } from 'react'
import { View, Text } from 'react-native'
import { Helmet } from 'react-helmet';
import useLinkTo from "@react-navigation/native/lib/commonjs/useLinkTo"
import useFocusEffect from "@react-navigation/core/lib/commonjs/useFocusEffect"
// import useRoute from "@react-navigation/core/lib/commonjs/useRoute"
import useNavigation from "@react-navigation/core/lib/commonjs/useNavigation"

const SSR = () => {
	const [first, setfirst] = useState()

	// const route = useRoute(); // useRoute خطا میده
	const navigation = useNavigation();
	const linkTo = useLinkTo();

	useFocusEffect(useCallback(() => {
	}, []))
	
	return (
		<div className="application">
			<Helmet>
				<meta name="description" content="دیجیکالا موبایل تبلت تلوزیون هدفون هنزفیری" />
				<title>My Title</title>
				<link rel="canonical" href="http://localhost/4000" />
			</Helmet>

			<View>
				<Text style={{ cursor: 'pointer' }} onClick={() => linkTo('/home')} >SSR SSR SSR</Text>
				<Text style={{color:'red'}} >SSR SSR SSR</Text>
			</View>
		</div>
	)
}


export default SSR