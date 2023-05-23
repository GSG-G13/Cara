import { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CartCount = () => {
  const [products, setProducts] = useState('');

  useEffect(() => {
    async function fetchCartProducts() {
      try {
        const response = await axios.get('api/v1/cart');
        const responseData = response.data.data;
        setProducts(responseData);
      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    }
    fetchCartProducts();
  }, []);

  const productsCount = products ? products.length : 0;

  return (
    <div className="count">{productsCount}</div>
  );
};

export default CartCount;
