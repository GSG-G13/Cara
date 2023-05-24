const express = require('express');

const router = express.Router();
const categoryRouter = require('./category');
const productRouter = require('./product');
const userRouter = require('./auth');
const cartRouter = require('./cart');
const authUser = require('../middleware/isAuth');

router.use('/api/v1/', userRouter);

router.use('/api/v1/', productRouter);
router.use('/api/v1/', categoryRouter);

router.use('/api/v1/', authUser, cartRouter);

module.exports = router;
