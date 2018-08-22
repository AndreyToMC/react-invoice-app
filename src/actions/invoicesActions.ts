import sendRequest from '../services/requestService'

import { push } from 'react-router-redux';

export const getInvoices = () => ({
  type: 'GET_INVOICES',
  payload: sendRequest('get', '/api/invoices'),
});
export const getInvoiceById = (id: number) => ({
  type: 'GET_INVOICE_BY_ID',
  payload: sendRequest('get', `/api/invoices/${id}`),
});

export const sendInvoices = (invoiceData, itemsArr) => (dispatch) => {
  const response = dispatch({
    type: 'SEND_INVOICES',
    payload: sendRequest('post', '/api/invoices', { ...invoiceData }),
  });
  response.then((data) => {
    const invoiceId = data.value.id;
    return Promise.all(itemsArr.map((elem) => sendRequest(
      'post',
      `/api/invoices/${invoiceId}/items`,
      { product_id: elem.product_id, quantity: elem.quantity },
      ))).then((res) => invoiceId);
  }).then(() => {
    dispatch(push(`/invoices/`));
  });
};

export const changeInvoice = (id, invoiceData) => ({
  type: 'CHANGE_INVOICE',
  payload: sendRequest('put', `/api/invoices/${id}`, {...invoiceData}),
});

export const deleteInvoice = (id) => ({
  type: 'DELETE_INVOICE',
  payload: sendRequest('delete', `/api/invoices/${id}`),
});
