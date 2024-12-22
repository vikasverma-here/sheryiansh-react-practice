import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function White() {
    const {theme,white}=useContext(ThemeContext)
  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={white} >White</button>
    </div>
  )
}

export default White
