const dbConnection = require('../../config/connection');

const getFeaturedQuery = () => dbConnection.query(
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
    from products join categories on products.category_id = categories.id
    WHERE products.isMainProduct = 'true' LIMIT 8`,
);
module.exports = getFeaturedQuery;
