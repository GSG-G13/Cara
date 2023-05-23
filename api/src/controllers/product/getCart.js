const getCartQuery = require('../../database/queries/product/getCartQuery');

const getCart = (req, res, next) => {
  getCartQuery(1)
    .then((data) => res.json({ error: false, data: data.rows }))
    .catch((err) => next(err));
};
module.exports = getCart;
