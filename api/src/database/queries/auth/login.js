const connection = require('../../config/connection');

const loginQuery = (email) => {
  const sql = {
    text: 'SELECT id,username, email,password FROM users where email=$1;',
    values: [email],
  };

  return connection.query(sql);
};
module.exports = loginQuery;
