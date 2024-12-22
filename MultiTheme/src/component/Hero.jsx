import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Hero() {
    const {theme,green} =useContext(ThemeContext)
  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={()=>green()} style={{backgroundColor:'green',color:'white'}} >Green</button>
    </div>
  )
}

export default Hero
