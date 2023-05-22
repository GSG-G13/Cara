const express = require('express');

const productRouter = express.Router();

const { getProducts, getProduct } = require('../controllers/product');

productRouter.get('/products', getProducts);
productRouter.get('/products/:id', getProduct);

module.exports = productRouter;
