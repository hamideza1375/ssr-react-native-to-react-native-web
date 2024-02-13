import React from 'react'
import Home from './Home'
import SSR from './SSR'

const App = ({url}) => {

if(url === '/ssr') return <SSR/>
if(url === '/home') return <Home/>



}


export default App