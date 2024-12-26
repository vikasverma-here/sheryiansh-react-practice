import React from 'react'
import { useParams } from 'react-router-dom'


const FashionDetails = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>
    <h1>Fashion product details here </h1>
    </div>
  )
}

export default FashionDetails
