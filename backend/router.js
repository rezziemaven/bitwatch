'use strict';
const Router = require('koa-router');
const router = new Router();

const productController = require('./controllers/product.controller');

router
  .get('/products',productController.getProducts)
  .get('/products/:PRODUCT/prices',productController.getPrices);

module.exports = router;