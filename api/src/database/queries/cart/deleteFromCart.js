const connection = require('../../config/connection');

const deleteFromCartQuery = (id) => {
  const sql = {
    text: `DELETE FROM carts WHERE id = $1;`,
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteFromCartQuery;
