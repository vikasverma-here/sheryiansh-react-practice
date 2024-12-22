import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Footer() {
    const {theme,red}=useContext(ThemeContext)
  return (
    <div>
       <h1> {theme} </h1>
      <button onClick={red} style={{backgroundColor:'red',color:'white'}} >Red</button>
    </div>
  )
}

export default Footer
