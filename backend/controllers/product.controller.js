'use strict';
const Product = require('../models/product.model');

exports.getProducts = async ctx => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  }
  catch (err) {
    throw new Error('No products found.');
    res.status(500);
  }
}

exports.getPrices = () => {

}