const dbConnection = require('../../config/connection');

const getProductQuery = (productId) => dbConnection.query(
  `SELECT 
    products.id,
    products.name,
    products.price,
    products.description,
    products.image,
    products.category_id,
    products.isMainProduct,
    products.isMainPage,
    products.isNewArrival,
    categories.name AS category
  FROM products
  JOIN categories ON products.category_id = categories.id
  WHERE products.id = $1`,
  [productId],
);

module.exports = getProductQuery;
