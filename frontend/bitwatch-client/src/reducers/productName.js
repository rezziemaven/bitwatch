import { SET_PRODUCT_NAME } from 'actions/types';

export default function (state = '', action) {
  switch (action.type) {
    case SET_PRODUCT_NAME:
      return action.payload;
    default: return state;
  }
};