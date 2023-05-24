const dbConnection = require('../../config/connection');

const getCartQuery = (userId) =>
  dbConnection.query(
    `SELECT 
      p.id AS product_id,
      p.name,
      p.price,
      p.description,
      p.image,
      p.category_id,
      p.isMainProduct,
      p.isMainPage,
      p.isNewArrival,
      c.id AS cart_id, 
      c.user_id,
      c.counts as counts
    FROM products AS p
    JOIN carts AS c ON p.id = c.product_id  
    WHERE c.user_id = $1`,
    [userId]
  );

/* const getCartQuery = (userId) => dbConnection.query(
    `Select 
    products.id,
    products.name,
    products.price,
    products.description,
    products.image,
    products.category_id,
    products.isMainProduct,
    products.isMainPage,
    products.isNewArrival,
    categories.name as category
    from products join categories on products.category_id = categories.id`,
  );
*/

module.exports = getCartQuery;
