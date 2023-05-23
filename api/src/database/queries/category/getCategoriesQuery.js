const dbConnection = require('../../config/connection');

const getCategoriesQuery = () => dbConnection.query('select * from categories;');
module.exports = getCategoriesQuery;
