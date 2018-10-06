import { SAVE_PRICES } from 'actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case SAVE_PRICES:
      return {...state,
        [action.payload.product]: action.payload.prices};
    default: return state;
  }
};