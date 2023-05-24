import { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Loader from '../loader';
import CartProduct from './cartProduct';

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
        <p>Here the products that you choose.</p>
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
