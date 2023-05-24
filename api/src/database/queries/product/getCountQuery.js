const dbConnection = require('../../config/connection');

function getCount() {
    const sql = {
        text: `SELECT COUNT(*) as total FROM products`,
       
      };

  return dbConnection.query(sql);
}

module.exports = getCount;
