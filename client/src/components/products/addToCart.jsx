import { useState } from 'react';
import axios from 'axios';

const AddToCartButton = ({ productId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = async () => {
    setIsLoading(true);

    try {
      await axios.post('/api/v1/cart/new', {
        product_id: productId,
        counts: 1,
      });

      // Handle success or display a success message

    } catch (error) {
      // Handle error or display an error message

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <i
      className="fa-solid fa-shopping-cart cart"
      onClick={addToCart}
      disabled={isLoading}
    >
    </i>
  );
};

export default AddToCartButton;
