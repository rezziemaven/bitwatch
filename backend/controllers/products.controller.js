'use strict';
const { Products } = require('../models');

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

