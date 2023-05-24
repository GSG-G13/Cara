const addToCartQuery = require('../../database/queries/cart');

const addToCart = (req, res, next) => {
  const { id } = req.user;
  const { productId } = req.params;
  const { counts } = req.body;
  const count = counts ? counts : (counts += 1);
  addToCartQuery(productId, id, count)
    .then(() =>
      res.json({ error: res.status, message: 'product added successfully' })
    )
    .catch((err) => next(err));
};
module.exports = addToCart;
