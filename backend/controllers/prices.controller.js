'use strict';
const { Prices } = require('../models');

exports.getPrices = async (ctx) => {
  try {
    const prices = await Prices(ctx.params.PRODUCT.toUpperCase());
    ctx.body = prices;
    ctx.status = 200;
  }
  catch (err) {
    ctx.status = 500;
    throw new Error('No prices found.');
  }
};