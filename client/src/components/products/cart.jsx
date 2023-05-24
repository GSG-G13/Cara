import { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CartProduct = ({ product }) => {
  const [count, setCount] = useState(product.counts || 0);

  const handleCountChange = async (e) => {
    setCount(e.target.value);
    const response = await axios.patch(`api/v1/cart/${product.cart_id}`, {
      count: e.target.value,
    });
    console.log(response);
  };

  return (
    <section
      id="prodetails"
      className="section-p1"
      style={{ borderBottom: '2px solid #ccc' }}
    >
      <div className="single-pro-image">
        <img src={product.image} alt="Product Image" style={{ width: '50%' }} />
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
        <input type="number" onChange={handleCountChange} value={count} />
      </div>
    </section>
  );
};

const Loader = () => (
  <section className="dots-container">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </section>
);

const CartComponent = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMyAPI() {
      setLoading(true);
      let response = await axios.get('api/v1/cart');
      setLoading(false);

      response = await response.data.data;
      setProduct(response);
    }
    fetchMyAPI();
  }, []);

  return (
    <>
      <section id="page-header">
        <h2>Your Cart</h2>
        <p>Save more with coupons & to 70% off!</p>
      </section>

      <Outlet />

      <section id="product1" className="section-p1">
        <div className="product-container">
          {loading && <Loader />}
          {products.map((product) => (
            <CartProduct key={product.product_id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};
export default CartComponent;
