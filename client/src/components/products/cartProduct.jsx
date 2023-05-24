/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';

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
export default CartProduct;
