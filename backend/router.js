'use strict';
const Router = require('koa-router');
const router = new Router();

const { ProductsController, PricesController }= require('./controllers');

router
  .get('/products',ProductsController.getProducts)
  .get('/products/:PRODUCT/prices',PricesController.getPrices);

module.exports = router;