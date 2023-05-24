import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero">
      <h4>Trader-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more with coupons & to 70% off!</p>
      <Link to="/products">
        <button>shop now</button>
      </Link>
    </section>
  );
};

export default Hero;
