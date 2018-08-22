import sendRequest from '../services/requestService'

export const getInvoicesItems = (invoicesId) => ({
  type: 'GET_INVOICE_ITEMS',
  payload: sendRequest('get', `/api/invoices/${invoicesId}/items`),
});

export const addInvoicesItems = (invoicesId, data) => ({
  type: 'ADD_INVOICE_ITEM',
  payload: sendRequest('post', `/api/invoices/${invoicesId}/items`, {...data}),
});

export const changeInvoicesItem = (invoicesId, data, id) => ({
  type: 'CHANGE_INVOICE_ITEM',
  payload: sendRequest('put', `/api/invoices/${invoicesId}/items/${id}`, {...data}),
});

export const deleteInvoicesItem = (invoicesId, id) => ({
  type: 'DELETE_INVOICE_ITEM',
  payload: sendRequest('delete', `/api/invoices/${invoicesId}/items/${id}`),
});
