import { apiURL } from '../services/apiURL';
import axios from 'axios'


export const getInvoicesItems = (invoicesId) => ({
  type: 'GET_INVOICE_ITEMS',
  payload: axios.get(`${apiURL}/api/invoices/${invoicesId}/items`).then(res => res.data),
});

export const addInvoicesItems = (invoicesId, data ) => ({
  type: 'ADD_INVOICE_ITEM',
  payload: axios.post(`${apiURL}/api/invoices/${invoicesId}/items`, {...data}).then(res => res.data),
});

export const changeInvoicesItem = (invoicesId, data, id) => ({
  type: 'CHANGE_INVOICE_ITEM',
  payload: axios.put(`${apiURL}/api/invoices/${invoicesId}/items/${id}`, {...data}).then(res => res.data),
});

export const deleteInvoicesItem = (invoicesId, id) => ({
  type: 'DELETE_INVOICE_ITEM',
  payload: axios.delete(`${apiURL}/api/invoices/${invoicesId}/items/${id}`).then(res => res.data),
});
