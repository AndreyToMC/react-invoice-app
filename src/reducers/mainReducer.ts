
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import customers from './customers';
import errors from './errors';
import invoiceItems from './invoiceItems';
import invoices from './invoices';
import products from './products';

import {getProductsEpic} from '../actions/productsActions'

export const rootEpic = combineEpics(
  getProductsEpic,
);

export const rootReducer = combineReducers({
  errors,
  customers,
  invoices,
  invoiceItems,
  products,
  routing: routerReducer,
});
