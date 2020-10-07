const Router = require('koa-router');
// const checkAuth = require('lib/middlewares/checkAuth');

const auth = new Router();
const authController = require('./auth.controller');

auth.post('/login', authController.login);
auth.post('/logout', authController.logout);

module.exports = auth;
