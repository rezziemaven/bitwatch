'use strict';
const axios = require('axios');
const { getProducts } = require('../services/moneeda-api.service');

const getSharedProducts = async () => {
  try {
    const allProducts = await axios.all([getProducts('BFX'),getProducts('BNB'),getProducts('BTX')]);
    const [BFX,BNB,BTX] = allProducts;
    const spread = [...BFX,...BNB,...BTX];
    const products = spread.reduce((acc,product) => {
      acc[product.id] = acc[product.id]+1 || 1;
      return acc;
    },{});
    let sharedProducts = [];
    for (let product in products) {
      if (products[product] === 3) sharedProducts.push(product);
    }
    return sharedProducts;
  }
  catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
};

module.exports = getSharedProducts;