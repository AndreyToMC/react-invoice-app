

const invoices = (state = [], action) => {
  switch (action.type) {
    case 'GET_INVOICES_FULFILLED':
      const invoicesArr = action.payload;
      return [...invoicesArr];
    case 'SEND_INVOICES_FULFILLED':
      const newInvoice = action.payload.data
      let newInvoiceArr = []
      newInvoiceArr = newInvoiceArr.concat(state)
      newInvoiceArr.push(newInvoice)
      return [...newInvoiceArr]
    default:
      return state;
  }
}

export default invoices;
