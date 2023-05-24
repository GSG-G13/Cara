BEGIN;
DROP TABLE IF EXISTS users,
products,
categories,
carts CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    image VARCHAR(255),
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    isAdmin boolean DEFAULT False,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price float default 0.0,
    description text,
    image VARCHAR(255),
    category_id INTEGER REFERENCES categories(id) ON UPDATE CASCADE ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    isMainProduct boolean DEFAULT False,
    isMainPage boolean DEFAULT False,
    isNewArrival boolean DEFAULT False
);
CREATE TABLE carts (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    counts INTEGER
);
COMMIT;