'use strict';

require('dotenv').config();
const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const cors = require('koa-cors');

const port = process.env.PORT || 3000;
const router = require ('./router');
require('./db');

app
  .use(logger)
  .use(cors)
  .use(router.routes())
  .listen(port,() => console.log(`Server listening on port ${port}`));