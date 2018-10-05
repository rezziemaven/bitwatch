'use strict';
const Product = require('../models/product.model');
const { getSharedProducts } = require('../helpers/moneeda-api.helper');

exports.getProducts = async (ctx) => {
  try {
    let products = await Product.find({},'product_name').sort({product_name:1});
    if (!products.length) {
      await exports.postProducts();
      products = await Product.find({},'product_name').sort({product_name:1});
    }
    ctx.body = products;
    ctx.status = 200;
  }
  catch (err) {
    ctx.status = 500;
    throw new Error('No products found.');
  }
}

exports.getPrices = () => {

}

exports.postProducts = async (ctx) => {
  try {
    const products = await getSharedProducts();
    const result = products.reduce((acc,product) => {
      acc.push({product_name: product});
      return acc;
    },[]);
    return await Product.create(result);

  }
  catch (error) {
    console.error(error); // eslint-disable-line no-console
  }

}