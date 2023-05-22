const getProductQuery = require('../../database/queries/product/getOneProductsQuery');

const getProduct = (req, res, next) => {
  const productId = req.params.id; 
  
  getProductQuery(productId)
    .then((data) => res.json({ error: false, data: data.rows[0] }))
    .catch((err) => next(err));
};

module.exports = getProduct;
