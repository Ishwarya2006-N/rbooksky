import React from 'react'
import App from './App'
import View from './View'
function Home() {
  return (
   <div>
    <div className='heading'><h1>Booksky</h1></div>
    <div><App/></div>
    <div><View/></div>
    </div>
  )
}

export default Home