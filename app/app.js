const express = require('express');
const app = express();
const db = require('./db');

var UserController = require('./controllers/userController');
app.use('/users', UserController);

module.exports = app;