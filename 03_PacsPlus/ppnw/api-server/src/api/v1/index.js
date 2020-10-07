const Router = require('koa-router');
const auth = require('./auth');
const worklist = require('./worklist')

const api = new Router();

api.use('/auth', auth.routes());
api.use('/worklist', worklist.routes());

module.exports = api;
