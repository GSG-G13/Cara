const getArrivalsQuery = require('../../database/queries/product/getArrivalsQuery');

const getArrivals = (req, res, next) => {
    getArrivalsQuery()
    .then((data) => res.json({ error: false, data: data.rows }))
    .catch((err) => next(err));
};
module.exports = getArrivals;
