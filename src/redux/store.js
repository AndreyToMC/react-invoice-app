
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import history from '../services/history';

import customers from './customers/reducers';
import products from './products/reducers';
import errors from '../reducers/errors';
import invoiceItems from '../reducers/invoiceItems';
import invoices from '../reducers/invoices';

const rootReducer = combineReducers({
  errors,
  invoiceItems,
  customers,
  invoices,
  products,
  routing: routerReducer,
});

import * as customersEpics from './customers/epics'
import * as productsEpics from './products/epics'

const rootEpic = combineEpics(
  customersEpics.getCustomersEpic,
  productsEpics.getProductsEpic,
);

const epicMiddleware = createEpicMiddleware();

function createMyStore() {
  const newStore = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        promiseMiddleware(),
        routerMiddleware(history),
        epicMiddleware,
      ),
    ),
  );
  epicMiddleware.run(rootEpic);

  return newStore;
}

export const store = createMyStore()
