/* eslint-disable camelcase */
const { addToCartQuery } = require('../../database/queries/cart');

const addToCart = (req, res, next) => {
  const { id } = req.user;
  const { counts, product_id } = req.body;
  addToCartQuery({ product_id, id, counts })
    .then(() => res.json({ error: res.status, message: 'product added successfully' }))
    .catch((err) => next(err));
};
module.exports = addToCart;
