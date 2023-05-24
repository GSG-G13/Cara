const cartRouter = require('express').Router();

const {
  addToCart,
  updateCart,
  deleteFromCart,
} = require('../controllers/cart');

cartRouter.patch('/cart/:id', updateCart);
cartRouter.delete('/cart/:id', deleteFromCart);
cartRouter.post('/cart/new', addToCart);

module.exports = cartRouter;
