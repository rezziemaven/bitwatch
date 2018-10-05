'use strict';
const axios = require('axios');
const { getPrice } = require('../services/moneeda-api.service');

const getPrices = async (product) => {
  try {
    const prices = await axios.all([getPrice('BFX',product),getPrice('BNB',product),getPrice('BTX',product)]);
    prices.sort((a,b) => a.price - b.price).reverse();
    return {
      product,
      prices: [...prices]
    };
  }
  catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
};

module.exports = getPrices;