import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import SingleShimmer from './SingleShimmer';
const ProductsDetails = () => {
  const params = useParams();
  console.log(params);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      setProducts(data.products);
      setLoading(false);
    };
    fetchData();
  }, []);

    function timeCoversation (time){
        const dateUTC = new Date(time);
        const options = {
          timeZone: 'Asia/Kolkata', 
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        };
        
        const dateIST = dateUTC.toLocaleString('en-IN', options);
        
       
    return dateIST}
  return (
    <div>
      {loading ? (
        <div className="loading">
          <SingleShimmer/>
        </div>
      ) : (
        products.map((product) => {
          if (params.id == product.id) {
            return (
              <div className="single" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p className="desc">{product.description}</p>
                <p className="price">${product.price}</p>
                <p className="rating">Rating: {product.rating}</p>
                <p className="warranty">Warranty: {product.warrantyInformation}</p>
                <p className="shipping">Shipping: {product.shippingInformation}</p>
                <p className="stock">Stock: {product.availabilityStatus}</p>
                <p>Category: {product.category}</p>
                <p>Discount Percentage: {product.discountPercentage}</p>
                <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>

                <div className="review-car">
                  <h1>Review for this Product</h1>
                  {product.reviews ? (
                    <div className="reviews">
                      {product.reviews.map((review, index) => (
                        <div key={index}>
                          <h3>{review.name}</h3>
                          <p>Rating: {review.rating}</p>
                          <p>{timeCoversation(review.date)}</p>
                          <p>{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No reviews available for this product.</p>
                  )}
                </div>
              </div>
            );
          }
          return null; 
        })
      )}
    </div>
  );
};

export default ProductsDetails;
