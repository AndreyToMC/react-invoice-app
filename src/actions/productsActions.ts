
import { apiURL } from '../services/apiURL';

import { ajax } from 'rxjs/ajax';

import {ofType} from 'redux-observable'

import {map, mergeMap, switchMap, tap} from 'rxjs/operators'

import {sendRequestObservable} from '../services/requestObservable'
import sendRequest from '../services/requestService'

export const getProducts = (product) => ({ type: 'GET_PRODUCTS', payload: product });
const getProductsFulfilled = (payload) => ({ type: 'GET_PRODUCTS_FULFILLED', payload });

export const getProductsEpic = (action$) => action$.pipe(
  ofType('GET_PRODUCTS'),
  tap(console.log),
  switchMap((action) =>
    sendRequestObservable('get', `${apiURL}/api/products`).pipe(
      tap(console.log),
      map((response) => getProductsFulfilled(response)),
    ),
  ),
);
