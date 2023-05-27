const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { join } = require('path');
require('env2')('.env');
const router = require('./src/routes');
const serverError = require('./src/Error/serverError');
const morgan = require('morgan');

const app = express();
app.disabled('x-powered-by');
app.set('port', process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client', 'dist')));

app.use(compression());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(router);
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'dist', 'index.html'));
});
app.use(serverError);
module.exports = app;
