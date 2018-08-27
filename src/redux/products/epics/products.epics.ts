
import { normalizeData } from '../../../services/normalizeData'
import { sendRequestObservable } from '../../../services/requestObservable'

import { ofType } from 'redux-observable'
import { map, switchMap, tap } from 'rxjs/operators'

import { ActionTypes, getProductsFulfilled } from '../actions'

export const getProductsEpic = (action$) => action$.pipe(
  ofType(ActionTypes.GET_PRODUCTS),
  switchMap((action) =>
    sendRequestObservable('get', `/api/products`).pipe(
      map((response) => normalizeData(response, ['name', 'price'])),
      map((data: any) => getProductsFulfilled({
        productsList: data.arr,
        productsPriceById: data.objByType.price,
        productsNameById: data.objByType.name,
      })),
    ),
  ),
);
