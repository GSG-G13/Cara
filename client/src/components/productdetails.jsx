import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await axios.get('/api/v1/product/' + id);
      const products = response.data;
      setProducts(products);
    };

    fetchProductDetails();
  }, [id]);

  async function addToCart(product_id) {
    const count = document.getElementById('count').value;
    try {
      await axios({
        method: 'post',
        url: '/api/v1/cart/new',
        data: {
          product_id,
          counts: count,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <section id="prodetails" className="section-p1">
      <div className="single-pro-image">
        <img src={products.data.image} width="100%" id="MainImg" />

        <div className="small-img-group">
          <div className="small-img-col">
            <img
              src="../img/products/f1.jpg"
              width="100%"
              className="small-img"
            />
          </div>
          <div className="small-img-col">
            <img
              src="../img/products/f2.jpg"
              width="100%"
              className="small-img"
            />
          </div>
          <div className="small-img-col">
            <img
              src="../img/products/f3.jpg"
              width="100%"
              className="small-img"
            />
          </div>
          <div className="small-img-col">
            <img
              src="../img/products/f4.jpg"
              width="100%"
              className="small-img"
            />
          </div>
        </div>
      </div>

      <div className="single-pro-details">
        <h4>{products.data.name}</h4>
        <h2>{products.data.price}</h2>
        <select>
          <option>Select Size</option>
          <option>XL</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
        </select>
        <br />
        <input id="count" type="number" defaultValue={1} min={1} />
        <button className="normal" onClick={() => addToCart(products.data.id)}>
          Add To Cart
        </button>
        <h4>Product Details</h4>
        <span>{products.data.description}.</span>
      </div>
    </section>
  );
};

export default ProductDetails;
