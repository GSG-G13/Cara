const Joi = require('joi');

const signupSchema = Joi.object({
  username: Joi.string().alphanum().required(),
  password: Joi.string().min(8).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

module.exports = signupSchema;
