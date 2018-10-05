'use strict';
require('dotenv').config();
const axios = require('axios');
const { MONEEDA_BASE_URL, MONEEDA_API_TOKEN } = process.env;

const productURL = exchange => `${MONEEDA_BASE_URL}/api/exchanges/${exchange}/products`;
const tickerURL = exchange => `${MONEEDA_BASE_URL}/api/exchanges/${exchange}/ticker`;

exports.getProducts = exchange => axios.get(productURL(exchange),{
  headers: {'Authorization': `Bearer ${MONEEDA_API_TOKEN}`},
}).then(response => response.data);

exports.getPrice = async (exchange,product) => {
  try {
    const response = await axios.get(tickerURL(exchange),{
      headers: {'Authorization': `Bearer ${MONEEDA_API_TOKEN}`},
        params: {product}
    });
    return {
      exchange,
      price: response.data.price
    };
  }
  catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
};