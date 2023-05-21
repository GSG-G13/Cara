import React from 'react';

const Header = () => {
  return (
    <section id="header">
      <a href="../index.html"><img src="../img/logo.png" alt="Logo" /></a>
      <div>
        <ul id="navbar">
          <li><a className="active" href="../index.html">home</a></li>
          <li><a href="shop.html">shop</a></li>
          <li><a href="seller.html">seller</a></li>
          <li className="bag-cart">
            <a href="#" id="lg-bag"><i className="fa-solid fa-bag-shopping  cart-icon"></i></a>
            <div className="count">0</div>
          </li>
          <a href="#" id="close"><i className="fa-solid fa-xmark"></i></a>
        </ul>
      </div>
      <div id="mobile">
        <a href="cart.html"><i className="fa-solid fa-bag-shopping"></i></a>
        <i id="bar" className="fa-solid fa-bars-staggered"></i>
      </div>
    </section>
  );
};

export default Header;
