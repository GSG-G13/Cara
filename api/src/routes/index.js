const express = require('express');

const router = express.Router();
const categoryRouter = require('./category');
const productRouter = require('./product');
const userRouter = require('./auth');

router.use('/api/v1/', productRouter);
router.use('/api/v1/', userRouter);

router.use('/api/v1/', productRouter);
router.use('/api/v1/', categoryRouter);

module.exports = router;
