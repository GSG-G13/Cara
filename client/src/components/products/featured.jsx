import { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Featured  = () => {
  const [products, setProduct] = useState('');
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get('api/v1/featured');
      response = await response.data.data;
      setProduct(response);
    }
    fetchMyAPI();
  }, []);

  const productsDiv = !products ? (
    <div>loading...</div>
  ) : (
    products.map((product) => (
      <div className="product" key={product.id}>
        <Link to={'/product/' + product.id}>
          <img src={product.image} alt={product.name} />
          <div className="description">
            <span>{product.description}</span>
            <h5>{product.category}</h5>
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h4>${product.price}</h4>
          </div>
        </Link>
        <Link to="#">
          <i className="fa-solid fa-shopping-cart cart"></i>
        </Link>
      </div>
    ))
  );
  return (
    <>
      

      <Outlet />

      <section id="product1" className="section-p1">
        <div className="product-container">{productsDiv}</div>
      </section>

     
     
    </>
  );
};
export default Featured;
