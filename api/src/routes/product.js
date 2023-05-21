const express = require('express');

const productRouter = express.Router();

const { getProducts } = require('../controllers/product');

productRouter.get('/products', getProducts);
module.exports = productRouter;
