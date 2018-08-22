import sendRequest from '../services/requestService'

export const getCustomers = () => ({
  type: 'GET_CUSTOMERS',
  payload: sendRequest('get', '/api/customers'),
});
