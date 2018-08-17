import { apiURL } from '../services/apiURL';
import axios from 'axios'
export const getInvoicesItems   = () => ({
  type: 'GET_INVOICES_ITEM',
  payload: axios.get(apiURL + '/api/invoices').then(res => res.data)
});

export const addInvoicesItems = (data) => {
  return (dispatch) => {
      axios.post(`${apiURL}/api/invoices/${id}/items`, {customer_id: 1, discount: 10, total:150}).then( res => console.log(res))
  };
}

export const changeInvoicesItem = (id, invoicesId, data) => {
  return (dispatch) => {
      axios.put(`${apiURL}/api/invoices/${invoicesId}/items/${id}`, {customer_id: 3, discount: 10, total:150}).then( res => console.log(res))
  };
}

export const deleteInvoicesItem = (id, invoicesId) => {
  return (dispatch) => {
      axios.delete(`${apiURL}/api/invoices/${invoicesId}/items/${id}`).then( res => console.log(res))
  };
}
