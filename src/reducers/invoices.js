const invoices = (state = [], action) => {
  switch (action.type) {
    case 'GET_INVOICES_FULFILLED':
      const invoicesArr = action.payload;
      return [...invoicesArr];
    default:
      return state;
  }
}

export default invoices;
