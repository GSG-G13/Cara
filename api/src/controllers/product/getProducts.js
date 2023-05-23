const getProductsQuery = require('../../database/queries/product/getProductsQuery');

const getProducts = (req, res, next) => {
  const { category, price, search } = req.query;
  const priceRange = price !== '' ? price.split(',') : [0, 10000];

  getProductsQuery({ category: category || '', price: priceRange, search: search || '' })
    .then((data) => res.json({ error: false, data: data.rows }))
    .catch((err) => next(err));
};
module.exports = getProducts;
