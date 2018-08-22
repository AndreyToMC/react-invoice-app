
import sendRequest from '../services/requestService'

export const getProducts = () => ({
  type: 'GET_PRODUCTS',
  payload: sendRequest('get', '/api/products'),
});
