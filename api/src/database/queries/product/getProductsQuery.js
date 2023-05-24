const dbConnection = require('../../config/connection');

function getProductsQuery({ category, price, search, page, limit }) {
  const valuesArr = [];
  const conditions = [];

  if (category !== '') {
    conditions.push('categories.name = $1');
    valuesArr.push(category);
  }

  if (price[0] !== 0 || price[1] !== 10000) {
    conditions.push(`products.price >= $${valuesArr.length + 1}`);
    conditions.push(`products.price <= $${valuesArr.length + 2}`);
    valuesArr.push(price[0]);
    valuesArr.push(price[1]);
  }

  if (search !== '') {
    conditions.push(`products.name ILIKE '%' || $${valuesArr.length + 1} || '%'`);
    valuesArr.push(search);
  }

  const conditionsString = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const offset = (page - 1) * limit;

  const sql = {
    text: `SELECT 
      products.id,
      products.name,
      products.price,
      products.description,
      products.image,
      products.category_id,
      products.isMainProduct,
      products.isMainPage,
      products.isNewArrival,
      COUNT(*) OVER() AS total_products,
      categories.name AS category
      FROM products
      JOIN categories ON products.category_id = categories.id
      ${conditionsString}
      LIMIT $${valuesArr.length + 1}
      OFFSET $${valuesArr.length + 2}`,
    values: [...valuesArr, limit, offset],
  };
  return dbConnection.query(sql);
}

module.exports = getProductsQuery;
