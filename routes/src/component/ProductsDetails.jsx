import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function ProductsDetails() {
  const {id} = useParams()
  console.log(id)
  const navigate = useNavigate()
  console.log(params)


  return (
    <div>
      Products details
      <h1>{params.catagory}</h1>
      <button onClick={()=>{navigate('/')}} > Back</button>
    </div>
  )
}

export default ProductsDetails
