import React from 'react';

const ProductComponent = () => {
  return (
    <>
      <section id="page-header">
        <h2>Super value deals</h2>
        <p>Save more with coupons & to 70% off!</p>
      </section>

      <section id="product1" className="section-p1">
        <div className="product-container"></div>
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
