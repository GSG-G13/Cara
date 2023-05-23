import { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CartComponent = () => {
  const [products, setProduct] = useState('');
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get('api/v1/cart');
      response = await response.data.data;
      setProduct(response);
    }
    fetchMyAPI();
  }, []);

  const productsDiv = !products ? (
    <div>loading...</div>
  ) : (
    products.map((product) => (


<section id="prodetails" className="section-p1" key={product.id} style={{ borderBottom: "2px solid #ccc" }}>
      <div className="single-pro-image">
      <img src={product.image} alt="Product Image" style={{ width: "50%" }} />

      </div>

      <div className="single-pro-details">
        <h4>{product.name}</h4>
        <h2>{product.price}</h2>
        <select>
          <option>Select Size</option>
          <option>XL</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
        </select>
        <br />
        <input type="number" value="1" />
      </div>
      
    </section>


   

      
    ))
  );
  return (
    <>
      <section id="page-header">
        <h2>Your Cart</h2>
        <p>Save more with coupons & to 70% off!</p>
      </section>

      <Outlet />

      <section id="product1" className="section-p1">
        <div className="product-container">{productsDiv}</div>
      </section>

     
    </>
  );
};
export default CartComponent;
