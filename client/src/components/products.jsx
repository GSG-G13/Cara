import Featured from './products/featured';

const Products = () => {
  return (
    <section id="product1" className="section-p1">
      <h2>featured products</h2>
      <p>summer collection new morden design</p>
      <div className="product-container" id="featuredProducts">
        <Featured />
      </div>
    </section>
  );
};

export default Products;
