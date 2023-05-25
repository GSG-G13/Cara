/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';

const CartProduct = ({ product, products, setProduct }) => {
  const [count, setCount] = useState(product.counts || 0);

  const handleCountChange = async (e) => {
    setCount(e.target.value);
    const response = await axios.patch(`api/v1/cart/${product.cart_id}`, {
      count: e.target.value,
    });
  };
  const handleDelete = async () => {
    const response = await axios.delete(`api/v1/cart/${product.cart_id}`);
    if (response.status === 200) {
      const newProducts = products.filter((value) => {
        return value.cart_id !== response.data.id;
      });
      setProduct(newProducts);
    }
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
        <br />
        <input type="number" onChange={handleCountChange} value={count} />
        <button onClick={handleDelete}>Delete from cart</button>
      </div>
    </section>
  );
};
export default CartProduct;
