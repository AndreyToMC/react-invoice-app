
import axios from 'axios'
import { apiURL } from '../services/apiURL';

export const getCustomers = () => ({
  type: 'GET_CUSTOMERS',
  payload: axios.get(apiURL + '/api/customers').then((res) => res.data),
});
