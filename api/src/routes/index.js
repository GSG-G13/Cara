const express = require('express');

const router = express.Router();
const productRouter = require('./product');
<<<<<<< HEAD
const userRouter = require('./auth');

router.use('/api/v1/', productRouter);
router.use('/api/v1/', userRouter);
=======
const categoryRouter = require('./category');

router.use('/api/v1/', productRouter);
router.use('/api/v1/', categoryRouter);
>>>>>>> e29470ba736c68d21c343b25d5f4d150ba89dd3a

module.exports = router;
