import { data as products } from './products.json';
import { data as prices } from './prices.json';

const PRODUCTS_ENDPOINT = 'http://localhost:3000/products';
const PRICES_ENDPOINT = 'http://localhost:3000/products/first/prices';

module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case PRODUCTS_ENDPOINT:
        return Promise.resolve({
          data: products
        });
      case PRICES_ENDPOINT:
        return Promise.resolve({
          data: prices
        });
      default: return;
    }
  })
};