import React, { useContext } from 'react'
import { ThemeContext } from './App'
const ChildC = () => {
  const {theme,settheme} = useContext(ThemeContext)
  const toggleBtn = ()=>{
    if(theme === 'light'){
      settheme("dark")
    }else{
      settheme("light")
    }
  }
  return (
    <div>  
     
      <button onClick={toggleBtn} >Change Theme</button>

    </div>
  )
}

export default ChildC