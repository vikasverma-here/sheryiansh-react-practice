import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>Your one-stop shop for quality and affordable products.</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At <strong>ShopEase</strong>, we are dedicated to bringing you the best shopping experience. From electronics to fashion, we ensure that every product meets the highest standards of quality and value. Our mission is to make online shopping easy, affordable, and enjoyable.
          </p>
        </div>
        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            We strive to be the go-to platform for all your shopping needs by offering a diverse range of products, exceptional customer service, and seamless delivery experiences.
          </p>
        </div>
      </section>

      <section className="about-footer">
        <p>We’re here to serve you with passion and excellence. Thank you for choosing <strong>ShopEase</strong>.</p>
      </section>
    </div>
  );
};

export default About;
