import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FilterComponent from './filter';

const ProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ category: '', price: '', search: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    async function fetchFilteredProducts() {
      try {
        const response = await axios.get(`/api/v1/products`, {
          params: {
            category: filter.category,
            price: filter.price,
            search: filter.search,
            page: currentPage,
            limit: productsPerPage,
          },
        });
        const data = response.data.data;
        setProducts(data);


      } catch (error) {
        console.error(error);
      }
    }

    fetchFilteredProducts();
  }, [filter, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderProducts = () => {
    if (!products || products.length === 0) {

      return (
        
        <section className="dots-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </section>
      );
    }

    return (
      <div className="product-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <Link to={'/product/' + product.id}>
              <img src={product.image} alt={product.name} />
              <div className="description">
                <h5 className="productName">{product.name}</h5>
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
        ))}
      </div>
    );
  };

  //const totalPages = Math.ceil(products.length / productsPerPage);
  const renderPaginationLinks = () => {
    if (!products || products.length === 0) {
      
      return (
        
        <section className="dots-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </section>
      );
    }
    const totalPages = Math.ceil(products[0].total_products / productsPerPage);
    const paginationLinks = [];
  
    for (let i = 1; i <= totalPages; i++) {
      paginationLinks.push(
        <a
          key={i}
          href="#"
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </a>
      );
    }
  
    return paginationLinks;
  };
  

  return (
    <>
      <section id="page-header">
        <h2>Super value deals</h2>
        <p>Save more with coupons & get up to 70% off!</p>
      </section>

      <section id="product1" className="section-p1">
        <FilterComponent setFilter={setFilter} />
        {renderProducts()}
      </section>

      <section id="pagination" className="section-p1">
        {renderPaginationLinks()}
      </section>
    </>
  );
};

export default ProductComponent;
