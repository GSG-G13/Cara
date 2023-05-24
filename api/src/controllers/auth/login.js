const { compare } = require('bcrypt');
const { loginSchema } = require('../../utils/validation');
const { generateToken } = require('../../utils/authToken');
const { CustomError } = require('../../utils/customError');
const { loginQuery } = require('../../database/queries/auth');

const login = (req, res, next) => {
  const { email, password } = req.body;
  loginSchema
    .validateAsync({ email, password }, { abortEarly: false })
    .then(({ email }) => loginQuery(email))
    .then(({ rows }) => {
      if (rows.length === 0) {
        throw new CustomError('email or password is incorrect', 400);
      }
      return rows[0];
    })
    .then((data) => {
      req.user = data;
      return compare(password, data.password);
    })
    .then((match) => {
      if (!match) {
        throw new CustomError('email or password is incorrect', 400);
      }
      const { username, image, id } = req.user;
      return generateToken({ username, image, id });
    })
    .then((token) => {
      res
        .cookie('token', token)
        .json({ error: false, message: 'Logged in successfully' });
    })
    .catch((err) => next(err));
};

module.exports = login;
