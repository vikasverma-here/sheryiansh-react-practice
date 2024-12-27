import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
function Products() {
  const [products, setProducts] = useState([])
  const allProducts = async () => {
    try{
      const{data} = await axios.get('https://fakestoreapi.com/products')
      console.log(data)
      setProducts(data)
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <h1>Products</h1>
      <button onClick={()=>allProducts()}>getProduct</button>
      <div className="products" >
        <div className="cart">
        {
          products.map((product) => (
            <div className='num' key={product.id}>
               <img src={product.image} alt={product.title} style={{width: '100px'}}/>
              <h3>{product.title}</h3>
             
              <p>{product.price}</p>
            </div>
          ))
        }
        </div>
       
        {/* <Link to="/products/gym">Gym</Link>
        <Link to="/products/clothing">Clothing</Link>
        <Link to="/products/music">Music</Link>
        <Link to="/products/mobiles">Mobiles</Link>
        <Link to="/products/headphone">headPhones</Link> */}
      </div>
    </div>
  )
}

export default Products
