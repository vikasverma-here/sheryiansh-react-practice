import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({element}) => {
    // console.log(element)
    const {category,price,image,id} = element
  return (
    <div className='main'>
        
        <img className='w-[200px]' src={image} alt="" />
      <h3>{category}</h3>
      <h2>{price}</h2>
       <Link to={`/productdetails/${id}`}><button>Details</button></Link>
      
     
    </div>
  )
}

export default Cart
