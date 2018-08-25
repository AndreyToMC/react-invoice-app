
import { normalizeData } from '../../../services/normalizeData'
import { sendRequestObservable } from '../../../services/requestObservable'

import { ofType } from 'redux-observable'
import { map, switchMap, tap } from 'rxjs/operators'

import { ActionTypes, getCustomersFulfilled } from '../actions'

export const getCustomersEpic = (action$) => action$.pipe(
  ofType(ActionTypes.GET_CUSTOMERS),
  switchMap((action) =>
    sendRequestObservable('get', `/api/customers`).pipe(
      map((response) => normalizeData(response, ['name'])),
      map((data: any) => getCustomersFulfilled({customersList: data.arr, customersNameById: data.objByType.name})),
    ),
  ),
);
