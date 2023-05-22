const express = require('express');

const oneProductRouter = express.Router();

const { getProduct } = require('../controllers/product/getOneProduct');

productRouter.get('/product/:id', getProduct);

module.exports = oneProductRouter;
