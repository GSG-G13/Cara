const express = require('express');

const router = express.Router();
const productRouter = require('./product');
const categoryRouter = require('./category');

router.use('/api/v1/', productRouter);
router.use('/api/v1/', categoryRouter);

module.exports = router;
