import React, { createContext,useState } from 'react'
import ChildA from './childA'

const ThemeContext = createContext()

const App = () => {
  const [theme, settheme] = useState("light")
  return (
    <>
    <ThemeContext.Provider value={{theme,settheme}} >
      <div className="container" style={{backgroundColor:theme==='light'?"black":"white"}}  >
      <ChildA/> 
      </div>
    
    </ThemeContext.Provider>
     
    </>
   
  )
}

export default App
export {ThemeContext}