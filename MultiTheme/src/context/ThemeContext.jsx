import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
const ThemeContext=createContext()


function ThemeProcider({children}) {
    const [theme,settheme]=useState('light')
 
    const green= ()=>{
settheme('green')
document.body.style.backgroundColor = 'green';
    }
    const red= ()=>{
settheme('red')
document.body.style.backgroundColor = 'red';
    }
    const yellow= ()=>{
settheme('yellow')
document.body.style.backgroundColor = 'yellow';
document.body.style.color='black'
    }
    const black= ()=>{
settheme('black')
document.body.style.backgroundColor = 'black';
document.body.style.color='white'
    }
    const white= ()=>{
settheme('white')
document.body.style.backgroundColor = 'white';
document.body.style.color="black"
    }

  return (
    <ThemeContext.Provider value={{theme,settheme,green,red,yellow,black,white}} >
{children}
    </ThemeContext.Provider>
  )
}

export default ThemeProcider
export {ThemeContext}
