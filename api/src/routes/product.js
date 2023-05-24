const express = require('express');

const productRouter = express.Router();

const {
  getProducts,
  getProduct,
  getArrivals,
  getFeatured,
  getCart,
  getProductCount,
} = require('../controllers/product');

productRouter.get('/products', getProducts);
productRouter.get('/product/:id', getProduct);
productRouter.get('/arrivals', getArrivals);
productRouter.get('/featured', getFeatured);
productRouter.get('/cart', getCart);
productRouter.get('/productscount', getProductCount);

module.exports = productRouter;
