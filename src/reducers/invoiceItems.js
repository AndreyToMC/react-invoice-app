
const invoiceItems = (state = [], action) => {
  switch (action.type) {
      case 'GET_INVOICE_ITEMS_FULFILLED':
      console.log(action.payload)
      const invoiceItemsArr = action.payload;
      return [...invoiceItemsArr];
    case 'CHANGE_INVOICE_ITEMS_FULFILLED':
      const newInvoice = action.payload.data
      let newInvoiceArr = []
      newInvoiceArr = newInvoiceArr.concat(state)
      newInvoiceArr.push(newInvoice)
      return [...newInvoiceArr]
    default:
      return state;
  }
}

export default invoiceItems;
