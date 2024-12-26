import React from 'react'
import '../pages/Products.css'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import SingleShimmer from './SingleShimmer'
import YouTubeShimmer from './YouTubeShimmer'


const Products = () => {
    const [products ,setProducts]=useState([])
    const [laoding ,setLoading]=useState(true)

    
    useEffect(() => {
        const fetchdata = async ()=>{
            const response = await fetch("https://dummyjson.com/products")
            const data = await response.json()
            

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
          <YouTubeShimmer/>
        </div>
      ) : (
        products.map((product) => {
        
          return (
            <div className="product-card" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
             
              <p className='price'>${product.price}</p>
              <p className='rating'>Rating: {product.rating}</p>
         
             <Link to={`/products/${product.id}`} className='details-btn'><button>Veiw Product Details</button></Link>
            </div>
          );
        })
      )}
    </div>
  </div>
  
  )
}

export default Products
