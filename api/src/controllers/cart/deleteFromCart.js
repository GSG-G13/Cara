const deleteFromCartQuery = require('../../database/queries/cart');

const deleteFromCart = (req, res, next) => {
  const { id } = req.params;
  deleteFromCartQuery(id)
    .then((result) =>
      res.json({
        error: res.status,
        message: `${result.rowCount} row(s) deleted`,
      })
    )
    .catch((err) => next(err));
};

module.exports = deleteFromCart;
