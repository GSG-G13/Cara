import React from 'react';
<<<<<<< HEAD
// import { Outlet } from "react-router-dom";
=======
import { Outlet, NavLink, Link } from 'react-router-dom';
>>>>>>> e29470ba736c68d21c343b25d5f4d150ba89dd3a

const Root = () => {
  return (
    <>
      <section id="header">
<<<<<<< HEAD
        <a href="../index.html">
          <img src="../img/logo.png" alt="Logo" />
        </a>
        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="../index.html">
                home
              </a>
            </li>
            <li>
              <a href="shop.html">shop</a>
            </li>
            <li>
              <a href="seller.html">seller</a>
            </li>
=======
        <Link to="/">
          <img src="../img/logo.png" alt="Logo" />
        </Link>
        <div>
          <ul id="navbar">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Products
              </NavLink>
            </li>
            <li>{/* <NavLink href="">seller</NavLink> */}</li>
>>>>>>> e29470ba736c68d21c343b25d5f4d150ba89dd3a
            <li className="bag-cart">
              <a href="#" id="lg-bag">
                <i className="fa-solid fa-bag-shopping  cart-icon"></i>
              </a>
              <div className="count">0</div>
            </li>
            <a href="#" id="close">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </ul>
        </div>
        <div id="mobile">
          <a href="cart.html">
            <i className="fa-solid fa-bag-shopping"></i>
          </a>
          <i id="bar" className="fa-solid fa-bars-staggered"></i>
        </div>
      </section>
      <Outlet />
      <footer className="section-p1">
        <div className="col">
          <img className="logo" src="../img/logo.png" alt="" />
          <h4>contact</h4>
          <p>
            <strong>Address:</strong>562Welingion rood street 32 sanFrancesco
          </p>
          <p>
            <strong>Phones:</strong> +01 2222 365 /(+91) 01 2345 6789
          </p>
          <p>
            <strong>hours:</strong> 10:00 - 18:00, Mon - Sat
          </p>

          <div className="follow">
            <h4>follow us</h4>
            <div className="icon">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-pinterest"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="col install">
          <h4>install app</h4>
          <p>form app store or google play</p>
          <div className="row">
            <img src="../img/pay/app.jpg" alt="" />
            <img src="../img/pay/play.jpg" alt="" />
          </div>
          <p>from app store or google play</p>
          <img src="../img/pay/pay.png" alt="" />
        </div>
        <div className="copyright">
          <p> copy right</p>
        </div>
      </footer>
    </>
  );
};

export default Root;
