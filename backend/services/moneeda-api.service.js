'use strict';
require('dotenv').config();
const axios = require('axios');
const { MONEEDA_BASE_URL, MONEEDA_API_TOKEN } = process.env;

const productURL = exchange => `${MONEEDA_BASE_URL}/api/exchanges/${exchange}/products`;
const tickerURL = exchange => `${MONEEDA_BASE_URL}/api/exchanges/${exchange}/ticker`;
const allTickersURL = exchange => `${MONEEDA_BASE_URL}/api/exchanges/${exchange}/alltickers`;

exports.getProducts = exchange => axios.get(allTickersURL(exchange),{
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
      price: response.data.price.toFixed(8)
    };
  }
  catch (error) {
    return {
      exchange,
      price: -1 //Returns a value of -1 when the product was listed in the exchange product list but somehow returns a message of 'invalid market' when trying to get the price
    };
    console.error(error); // eslint-disable-line no-console
  }
};