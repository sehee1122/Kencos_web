const express = require('express');
const api = express.Router();
const auth = require('./auth/index');

api.get('/auth', auth)

module.exports = api;
