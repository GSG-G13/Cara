const getFeaturedQuery = require('../../database/queries/product/getFeaturedQuery');

const getFeatured = (req, res, next) => {
    getFeaturedQuery()
    .then((data) => res.json({ error: false, data: data.rows }))
    .catch((err) => next(err));
};
module.exports = getFeatured;
