import React from 'react'

import Hero from './component/Hero'
import Footer from './component/Footer'
import Header from './component/Header'
import Black from './component/Black'
import White from './component/White'



const App = ({theme}) => {

  return (
    <div className='app'>
      
     <Header/>
     <Hero/>
     <Footer/>
     <Black/>
     <White/>
    </div>
  )
}

export default App
