const express = require('express');

const categoryRouter = express.Router();

const { getCategories } = require('../controllers/category');

categoryRouter.get('/categories', getCategories);

module.exports = categoryRouter;
