/* eslint-disable camelcase */
const connection = require('../../config/connection');

const addToCartQuery = ({ product_id, id, counts }) => {
  const sql = {
    text: 'INSERT INTO carts (product_id, user_id,counts) VALUES ($1, $2, $3);',
    values: [product_id, id, counts],
  };
  return connection.query(sql);
};

module.exports = addToCartQuery;
