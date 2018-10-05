'use strict';
require('dotenv').config();
const axios = require('axios');
const {MONEEDA_BASE_URL, MONEEDA_API_TOKEN} = process.env;

const productURL = exchange => `${MONEEDA_BASE_URL}/api/exchanges/${exchange}/products`;

const getProducts = (exchange) => axios.get(productURL(exchange),{
  headers: {'Authorization': `Bearer ${MONEEDA_API_TOKEN}`},
}).then(response => response.data);

exports.getSharedProducts = async () => {
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
    console.error(error);
  }
}

exports.getSharedProducts();