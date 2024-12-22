import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Header() {
    const {theme,yellow} =useContext(ThemeContext)

  return (
    <div>
     <h1>{theme}</h1>
     <button onClick={yellow} style={{backgroundColor:'yellow',color:'black'}} >Yellow</button>
    </div>
  )
}

export default Header
