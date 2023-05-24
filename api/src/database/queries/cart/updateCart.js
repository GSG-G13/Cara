const connection = require('../../config/connection');

const updateCartQuery = (count, id) => {
  const sql = {
    text: `UPDATE carts SET counts = $1 where id = $2;`,
    values: [count, id],
  };
  return connection.query(sql);
};

module.exports = updateCartQuery;
