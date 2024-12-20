import React from 'react'
import Child1 from './component/Child1'
import { createContext } from 'react'
import { useState } from 'react'
 
  const data = createContext()
const App = () => {
  const [mydata,setmydata ] =useState("bahut sara data")
  return (
    
      <data.Provider value={{mydata,setmydata}} >
      <Child1/>
      </data.Provider>
   
  )
}

export default App
export {data}