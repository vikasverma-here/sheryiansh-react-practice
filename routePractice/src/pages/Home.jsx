import React from 'react';
import './Home.css'; // Import the external CSS file

import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
   
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to ShopEase</h1>
        <p>Discover a world of amazing products at unbeatable prices.</p>
      <Link to='/products' ><button className="explore-btn" >Explore Now</button></Link>  
      </header>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <div className="category-card">Electronics</div>
          <div className="category-card">Fashion</div>
          <div className="category-card">Home & Kitchen</div>
          <div className="category-card">Beauty</div>
        </div>
      </section>

    
    </div>
  );
};

export default Home;
