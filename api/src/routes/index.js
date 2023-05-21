const express = require('express');

const router = express.Router();
const productRouter = require('./product');

router.use('/api/v1/', productRouter);

module.exports = router;
