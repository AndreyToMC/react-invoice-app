import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import customers from './customers';
import invoices from './invoices';
import invoiceItems from './invoiceItems';
import products from './products';


export default combineReducers({
  customers,
  invoices,
  invoiceItems,
  products,
  routing: routerReducer,
});
