const express = require('express');

const router = express.Router();
const productRouter = require('./product');
const userRouter = require('./auth');
const categoryRouter = require('./category');

router.use('/api/v1/', productRouter);
router.use('/api/v1/', userRouter);
router.use('/api/v1/', categoryRouter);

module.exports = router;
