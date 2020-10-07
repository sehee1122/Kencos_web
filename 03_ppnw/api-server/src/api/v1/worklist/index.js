const Router = require('koa-router');

const worklist = new Router();
const worklistController = require('./worklist.controller');

worklist.get('/', worklistController.worklist);

module.exports = worklist;