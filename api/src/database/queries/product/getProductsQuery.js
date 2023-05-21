const dbConnection = require('../../config/connection');

const getProductsQuery = () => dbConnection.query(
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
    categories.name
    from products join categories on products.category_id === categories.id`,
);
module.exports = getProductsQuery;
