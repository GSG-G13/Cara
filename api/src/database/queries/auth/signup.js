const connection = require('../../config/connection');

const signupQuery = (userData) => {
  const { username, password, email } = userData;
  const sql = {
    text: 'INSERT INTO users (username,password,email) values ($1,$2,$3) RETURNING *;',
    values: [username, password, email],
  };
  return connection.query(sql);
};
module.exports = signupQuery;
