import { ActionTypes } from '../actions';
import { initialState } from '../states';

const invoiceItems = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_INVOICE_ITEMS_FULFILLED:
      const invoiceItemsArr = action.payload;
      return [...invoiceItemsArr];
    case ActionTypes.ADD_INVOICE_ITEM_FULFILLED:
      const invoiceItem = action.payload;
      return [...state, invoiceItem];
    case ActionTypes.CHANGE_INVOICE_ITEM_FULFILLED:
      const newItem = action.payload;
      let newItemArr = [];
      newItemArr = newItemArr.concat(state);
      let oldItem;
      newItemArr.forEach((elem, i) => {
        if (elem.id === newItem.id) { oldItem = i }
      });
      newItemArr[oldItem] = newItem;
      return [...newItemArr];
    case ActionTypes.DELETE_INVOICE_ITEM_FULFILLED:
      return state;

    default:
      return state;
  }
}

export default invoiceItems;
