import React from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const products = await axios.get('/api/v1/products');
  console.log(products);
  return { products };
}

const ProductComponent = () => {
  const { products } = useLoaderData();
  const productsDiv = products.data.data.map((product) => (
    <div className="product" key={product.id}>
      <a href="">
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
      </a>
      <a href="#">
        <i className="fa-solid fa-shopping-cart cart"></i>
      </a>
    </div>
  ));
  return (
    <>
      <section id="page-header">
        <h2>Super value deals</h2>
        <p>Save more with coupons & to 70% off!</p>
      </section>

      <section id="product1" className="section-p1">
        <div className="product-container">{productsDiv}</div>
      </section>

      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i className="fa-solid fa-right-long"></i>
        </a>
      </section>
    </>
  );
};
export default ProductComponent;
