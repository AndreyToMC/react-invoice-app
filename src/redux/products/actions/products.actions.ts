export const ActionTypes = {
  GET_PRODUCTS: 'products/GET_PRODUCTS',
  GET_PRODUCTS_FULFILLED: 'products/GET_PRODUCTS_FULFILLED',
};

export const getProducts = (product) => ({ type: ActionTypes.GET_PRODUCTS});
export const getProductsFulfilled = (payload) => ({ type: ActionTypes.GET_PRODUCTS_FULFILLED, payload });
