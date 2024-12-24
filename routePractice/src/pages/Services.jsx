import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { id: 1, title: 'Free Shipping', description: 'Get free shipping on all orders above $50.' },
    { id: 2, title: '24/7 Support', description: 'Our support team is here to help you anytime, anywhere.' },
    { id: 3, title: 'Secure Payments', description: 'We ensure 100% secure payment methods.' },
    { id: 4, title: 'Easy Returns', description: 'Hassle-free returns within 30 days of purchase.' },
  ];

  return (
    <div className="services-container">
      <h1 className="services-header">Our Services</h1>
      <div className="services-cards">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
