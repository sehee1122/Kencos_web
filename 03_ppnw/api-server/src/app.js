require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const cors = require('@koa/cors');
const jwtMiddleware = require('lib/middlewares/jwt');
const api = require('./api');
const app = new Koa();

app.use(jwtMiddleware);
app.use(bodyParser());
app.use(cors({
  credentials: true
}));

const router = new Router();

router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
