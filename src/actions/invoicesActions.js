import { apiURL } from '../services/apiURL';
import axios from 'axios'
export const getInvoices   = () => ({
  type: 'GET_INVOICES',
  payload: axios.get(apiURL + '/api/invoices').then(res => res.data)
});

export const sendInvoices = (data) => {
  return (dispatch) => {
      axios.post(apiURL + '/api/invoices', {...data}).then( res => console.log(res))
  };
}

export const changeInvoice = (id, data) => {
  return (dispatch) => {
      axios.put(`${apiURL}/api/invoices/${id}`, {customer_id: 3, discount: 10, total:150}).then( res => console.log(res))
  };
}

export const deleteInvoice = (id) => {
  return (dispatch) => {
      axios.delete(`${apiURL}/api/invoices/${id}`).then( res => console.log(res))
  };
}
