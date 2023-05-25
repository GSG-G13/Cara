const { deleteFromCartQuery } = require('../../database/queries/cart');

const deleteFromCart = (req, res, next) => {
  const { id } = req.params;
  deleteFromCartQuery(id)
    .then((result) =>
      res.json({
        error: res.status,
        message: `${result.rowCount} row(s) deleted`,
        id: result.rows[0].id,
      })
    )
    .catch((err) => next(err));
};

module.exports = deleteFromCart;
