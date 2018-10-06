import { combineReducers } from 'redux';
import productNameReducer from 'reducers/productName';
import productsReducer from 'reducers/products';
import pricesReducer from 'reducers/prices';

export default combineReducers({
  productName: productNameReducer,
  products: productsReducer,
  prices: pricesReducer
});