const getCartQuery = require('../../database/queries/product/getCartQuery');

const getCart = (req, res, next) => {
  //const userId = req.cookies.id; 
  const userId = 1; 

  getCartQuery(userId)
    .then((data) => res.json({ error: false, data: data.rows }))
    .catch((err) => next(err));
};

module.exports = getCart;
