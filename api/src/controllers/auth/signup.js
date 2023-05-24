const { hash } = require('bcrypt');
const { signupSchema } = require('../../utils/validation');
const { generateToken } = require('../../utils/authToken');
const { CustomError } = require('../../utils/customError');
const { checkUserQuery, signupQuery } = require('../../database/queries/auth');
const { log } = require('console');

const signup = (req, res, next) => {
  const { username, email, password } = req.body;
  signupSchema
    .validateAsync({ username, email, password }, { abortEarly: false })
    .then(({ email }) => checkUserQuery(email))
    .then((data) => {
      if (data.rows > 0) {
        throw new CustomError('username or email is not valid', 401);
      }
      return hash(password, 10);
    })
    .then((hash) => signupQuery({ username, email, password: hash }))
    .then((newUserData) => {
      req.user = newUserData.rows[0];
      console.log(req.user);
      return generateToken({
        username: req.user.username,
        image: req.user.image,
        id: req.user.id,
      });
    })
    .then((token) =>
      res.cookie('token', token).json({
        error: false,
        data: { massage: 'user created successfully', user: req.user },
      })
    )
    .catch((err) => {
      log(err);
      next(err);
    });
};

module.exports = signup;
