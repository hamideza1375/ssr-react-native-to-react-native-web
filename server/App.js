import React from 'react'
import Home from '../src/components/Home'
import SSR from '../src/components/SSR'

const App = ({ location: { pathname, search } }) => {
	console.log("pathname:"+pathname, ",search:"+search);
	if (pathname === '/ssr') return <SSR />
	if (pathname === '/home') return <Home />
}
export default App