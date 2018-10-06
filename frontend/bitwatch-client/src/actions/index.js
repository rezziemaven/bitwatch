import { SET_PRODUCT_NAME, SET_PRODUCTS, SAVE_PRICES } from 'actions/types';

export const setProductName = (productName) => ({
  type: SET_PRODUCT_NAME,
  payload: productName
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products
});

export const savePrices = (prices) => ({
  type: SAVE_PRICES,
  payload: prices
});