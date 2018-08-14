import { apiURL } from '../services/apiURL';
import axios from 'axios'
export const getProducts = () => ({
  type: 'GET_PRODUCTS',
  payload: axios.get(apiURL + '/api/products').then(res => res.data)
});
