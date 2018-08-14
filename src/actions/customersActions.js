import { apiURL } from '../services/apiURL';
import axios from 'axios'
export const getCustomers = () => ({
  type: 'GET_CUSTOMERS',
  payload: axios.get(apiURL + '/api/customers').then(res => res.data)
});
