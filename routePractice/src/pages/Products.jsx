import React from 'react'
import '../pages/Products.css'
import { useEffect,useState } from 'react'

const Products = () => {
    const [products ,setProducts]=useState([])
    const [laoding ,setLoading]=useState(true)
    useEffect(() => {
        const fetchdata = async ()=>{
            const response = await fetch("https://dummyjson.com/products")
            const data = await response.json()
            console.log(data)
            setProducts(data.products)
            setLoading(false)
        }
        fetchdata()
    }, [])
  return (
    <div className='main-container'>
    <h1 className='heading'>Products</h1>
    <div className="products-container">
      {laoding ? (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      ) : (
        products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p className='desc'>{product.description}</p>
              <p className='price'>${product.price}</p>
              <p className='rating'>Rating: {product.rating}</p>
              <p className='warranty'>Warranty: {product.warrantyInformation}</p>
              <p className='shipping'>Shipping: {product.shippingInformation}</p>
              <p className='stock'>Stock: {product.availabilityStatus}</p>
            </div>
          );
        })
      )}
    </div>
  </div>
  
  )
}

export default Products
