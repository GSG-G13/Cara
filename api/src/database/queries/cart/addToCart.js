const connection = require('../../config/connection');

const addToCartQuery = (productId, userId, count) => {
  const sql = {
    text: `INSERT INTO carts (product_id, user_id,counts) VALUES ($1, $2, $3);`,
    values: [productId, userId, count],
  };
  return connection.query(sql);
};

module.exports = addToCartQuery;
