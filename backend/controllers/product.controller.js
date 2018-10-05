'use strict';
const { Products, Prices } = require('../models');

exports.getProducts = async (ctx) => {
  try {
    const products = await Products();
    ctx.body = products;
    ctx.status = 200;
  }
  catch (err) {
    ctx.status = 500;
    throw new Error('No products found.');
  }
}

exports.getPrices = async (ctx) => {
  try {
    const prices = await Prices(ctx.params.PRODUCT);
    ctx.body = prices;
    ctx.status = 200;
  }
  catch (err) {
    ctx.status = 500;
    throw new Error('No prices found.');
  }
};