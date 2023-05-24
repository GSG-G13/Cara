const updateCartQuery = require("../../database/queries/cart/updateCart");

const updateCart = (req, res, next) => {
  const { id } = req.params;
  const { count } = req.body;
  updateCartQuery(count, id)
    .then(() =>
      res.json({ error: res.status, message: 'product count updated' })
    )
    .catch((err) => next(err));
};

module.exports = updateCart;
