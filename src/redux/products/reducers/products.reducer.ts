import { ActionTypes } from '../actions';
import { initialState } from '../states';

const products = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

export default products;
