import React from 'react'
import { useState } from 'react'

const App = () => {
  const [radio, setradio] = useState('')
  const [city, setcity] = useState("city")
  const data={
city,
radio
  }
  console.log(data)
  return (
    <>
 <form action="">
      <label htmlFor="">male</label>
     <input type="radio"  value="male"  onChange={(e)=>setradio(e.target.value) } checked={radio=="male"?true:false}  />
    <label htmlFor="">female</label>
     <input type="radio" value="female" onChange={(e)=>setradio(e.target.value)} checked={radio=="female"?true:false} />

     <select  value={city} onChange={(e)=>setcity(e.target.value)} > 
  <option value="City">City</option>
  <option value="bhopal">bhopal</option>
  <option value="gwalior">gwolior</option>
  <option value="sagar">sagar</option>
</select>
     </form>




     </>
  )
}

export default App
