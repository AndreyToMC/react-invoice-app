
const invoiceItems = (state = [], action) => {
  switch (action.type) {
    case 'GET_INVOICE_ITEMS_FULFILLED':
      const invoiceItemsArr = action.payload;
      return [...invoiceItemsArr];

    case 'ADD_INVOICE_ITEM_FULFILLED':
      const invoiceItem = action.payload;
      return [...state, invoiceItem];

    case 'CHANGE_INVOICE_ITEM_FULFILLED':
      const newItem = action.payload;
      let newItemArr = [];
      newItemArr = newItemArr.concat(state);
      let oldItem;
      newItemArr.forEach((elem, i) => {
        if (elem.id === newItem.id) { oldItem = i }
      });
      newItemArr[oldItem] = newItem;
      return [...newItemArr];
    case 'DELETE_INVOICE_ITEM_FULFIELD':
      return state;

    default:
      return state;
  }
}

export default invoiceItems;
