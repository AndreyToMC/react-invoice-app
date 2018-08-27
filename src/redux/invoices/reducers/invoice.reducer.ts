import { ActionTypes } from '../actions';
import { initialState } from '../states';

const invoices = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_INVOICES_FULFILLED:
      const invoicesList = action.payload;
      return { ...state, invoicesList};
    case ActionTypes.GET_INVOICE_BY_ID_FULFILLED:
      const currentInvoice = action.payload;
      return { ...state, currentInvoice};
    case ActionTypes.SEND_INVOICES_FULFILLED:
      const newInvoice = action.payload;
      let newInvoiceArr = [];
      newInvoiceArr = newInvoiceArr.concat(state.invoicesList);
      newInvoiceArr.push(newInvoice);
      return { ...state, invoicesList: newInvoiceArr};
    case ActionTypes.CHANGE_INVOICE_FULFILLED:
      const newInvoiceValues = action.payload;
      let newInvoicesArr = [];
      newInvoicesArr = newInvoicesArr.concat(state.invoicesList);
      let oldInvoice;
      newInvoicesArr.forEach((elem, i) => {
        if (elem.id === newInvoiceValues.id) { oldInvoice = i }
      });
      newInvoiceValues.customer_id = parseInt(newInvoiceValues.customer_id, 10)
      newInvoicesArr[oldInvoice] = newInvoiceValues;
      return { invoicesList: newInvoicesArr, currentInvoice: newInvoiceValues};
    case ActionTypes.DELETE_INVOICE_FULFILLED:
      const deletedInvoiceId = action.payload.id
      const newState = {...state}
      newState.invoicesList = newState.invoicesList.filter((elem) => elem.id !== deletedInvoiceId)
      return { ...newState};
    default:
      return state;
  }
}

export default invoices;
