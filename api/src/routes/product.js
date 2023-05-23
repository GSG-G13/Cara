const express = require('express');

const productRouter = express.Router();

const { getProducts, getProduct } = require('../controllers/product');

productRouter.get('/products', getProducts);
productRouter.get('/product/:id', getProduct);

module.exports = productRouter;
