const { readFileSync } = require('fs');
const { join } = require('path');
require('env2')('.env');
const dbConnection = require('./connection');
const fakeProducts = require('./fakeData.json');

let sql;
const products = fakeProducts.reduce((acc, current, index, arr) => (
  acc
    + (index === arr.length - 1
      ? `('${current.name}',${current.price},'${current.description}',${current.category_id},'${current.image}'); COMMIT;`
      : `('${current.name}',${current.price},'${current.description}',${current.category_id},'${current.image}'),
      
      `)
), 'BEGIN; INSERT INTO products (name, price , description, category_id, image) VALUES ');
const dbBuilder = () => {
  if (process.env.NODE_ENV === 'test') {
    sql = `${readFileSync(join(__dirname, 'build.sql'), {
      encoding: 'utf8',
    }).toString()}

     ${readFileSync(join(__dirname, 'seeder.sql'), {
    encoding: 'utf8',
  }).toString()} 
     
     ${products}`;
  } else if (process.env.NODE_ENV === 'development') {
    sql = `${readFileSync(join(__dirname, 'build.sql'), {
      encoding: 'utf8',
    }).toString()}
  
       ${readFileSync(join(__dirname, 'seeder.sql'), {
    encoding: 'utf8',
  }).toString()} 

       ${products}
       `;
  } else if (process.env.NODE_ENV === 'production') {
    sql = readFileSync(join(__dirname, 'build.sql'), {
      encoding: 'utf8',
    }).toString();
  }
  return dbConnection.query(sql);
};
module.exports = dbBuilder;
