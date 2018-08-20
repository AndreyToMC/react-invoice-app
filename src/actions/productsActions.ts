
import axios from 'axios';
import { apiURL } from '../services/apiURL';

export const getProducts = () => ({
  type: 'GET_PRODUCTS',
  payload: axios.get(apiURL + '/api/products').then((res) => res.data),
});
