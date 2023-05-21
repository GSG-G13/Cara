const getProductsQuery = require('../../database/queries/product/getProductsQuery');

const getProducts = (req, res, next) => {
  getProductsQuery()
    .then((data) => res.json({ error: false, data: data.rows }))
    .catch((err) => next(err));
};
module.exports = getProducts;
