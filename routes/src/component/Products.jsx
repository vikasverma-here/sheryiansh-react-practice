import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div className="oroducts" style={{display: 'flex', justifyContent: 'space-around'}}>
        <Link to="/products/gym">Gym</Link>
        <Link to="/products/clothing">Clothing</Link>
        <Link to="/products/music">Music</Link>
        <Link to="/products/mobiles">Mobiles</Link>
        <Link to="/products/headphone">headPhones</Link>
      </div>
    </div>
  )
}

export default Products
