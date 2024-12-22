import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Black = () => {
    const {theme,black}=useContext(ThemeContext)
  return (
    <div>
        <h1>{theme}</h1>
      <button onClick={black} style={{backgroundColor:'black',color:'white'}} >Black</button>
    </div>
  )
}

export default Black
