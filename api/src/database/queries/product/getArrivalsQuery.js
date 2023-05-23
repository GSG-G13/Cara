const dbConnection = require('../../config/connection');

const getArrivalsQuery = () => dbConnection.query(
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
    WHERE products.isnewarrival = 'true' LIMIT 8`,
);
module.exports = getArrivalsQuery;
