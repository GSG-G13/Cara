const getCategoriesQuery = require('../../database/queries/category/getCategoriesQuery');

const getCategories = (req, res, next) => {
  getCategoriesQuery()
    .then((data) => res.json({ error: false, data: data.rows }))
    .catch((error) => next(error));
};
module.exports = getCategories;
