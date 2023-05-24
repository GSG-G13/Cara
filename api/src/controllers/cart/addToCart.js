const { log } = require('console');
const { addToCartQuery } = require('../../database/queries/cart');

const addToCart = (req, res, next) => {
  const { id } = req.user;
  console.log(req.user, 'fffff');
  const { counts, product_id } = req.body;
  log(product_id,"gghguygyugyug")
  // const count = counts ? counts : (counts += 1);
  addToCartQuery({ product_id, id, counts })
    .then(() =>
      res.json({ error: res.status, message: 'product added successfully' })
    )
    .catch((err) => next(err));
};
module.exports = addToCart;
