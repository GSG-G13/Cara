const express = require('express');

const productRouter = express.Router();

const { getProducts, getProduct, getArrivals , getFeatured} = require('../controllers/product');

productRouter.get('/products', getProducts);
productRouter.get('/product/:id', getProduct);
productRouter.get('/arrivals', getArrivals);
productRouter.get('/featured', getFeatured);

module.exports = productRouter;
