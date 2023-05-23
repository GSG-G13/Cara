const express = require('express');

const router = express.Router();
const productRouter = require('./product');
const userRouter = require('./auth');

router.use('/api/v1/', productRouter);
router.use('/api/v1/', userRouter);

module.exports = router;
