import React from 'react'
import { useNavigate } from 'react-router-dom'
const PNF = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>page not found 404 error</h1>
      <button onClick={()=>{navigate('/')}} >Back to Home</button>
    </div>
  )
}

export default PNF
