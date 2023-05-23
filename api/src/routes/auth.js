const userRouter = require('express').Router();
const login = require('../controllers/auth/login');
const signup = require('../controllers/auth/signup');

userRouter.post('/login', login);

userRouter.post('/signup', signup);

module.exports = userRouter;
