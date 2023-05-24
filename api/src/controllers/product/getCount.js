const getCount = require('../../database/queries/product/getCountQuery');

const getProductCount = (req, res, next) => {
    getCount()
    .then((data) => res.json({ error: false, data: data.rows }))
    .catch((err) => next(err));
};
module.exports = getProductCount;
