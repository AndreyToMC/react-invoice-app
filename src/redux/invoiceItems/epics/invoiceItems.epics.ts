
import { sendRequestObservable } from '../../../services/requestObservable'

import { ofType } from 'redux-observable'
import { map, switchMap, tap } from 'rxjs/operators'

import {
  ActionTypes,
  addInvoicesItemsFulfilled,
  changeInvoicesItemFulfilled,
  deleteInvoicesItemFulfilled,
  getInvoicesItemsFulfilled,
} from '../actions'

export const getInvoicesItemsEpic = (action$) => action$.pipe(
  ofType(ActionTypes.GET_INVOICE_ITEMS),
  switchMap((action: any) =>
    sendRequestObservable(
      'get',
      `/api/invoices/${action.payload.invoicesId}/items`,
    ).pipe(
      map((response) => getInvoicesItemsFulfilled(response)),
    ),
  ),
);

export const addInvoicesItemsEpic = (action$) => action$.pipe(
  ofType(ActionTypes.ADD_INVOICE_ITEM),
  switchMap((action: any) =>
    sendRequestObservable(
      'post',
      `/api/invoices/${action.payload.invoicesId}/items`,
      {...action.payload.data},
    ).pipe(
      map((response) => addInvoicesItemsFulfilled(response)),
    ),
  ),
);

export const changeInvoicesItemEpic = (action$) => action$.pipe(
  ofType(ActionTypes.CHANGE_INVOICE_ITEM),
  switchMap((action: any) =>
    sendRequestObservable(
      'put',
      `/api/invoices/${action.payload.invoicesId}/items/${action.payload.id}`,
      {...action.payload.data},
    ).pipe(
      map((response) => changeInvoicesItemFulfilled(response)),
    ),
  ),
);

export const deleteInvoicesItemEpic = (action$) => action$.pipe(
  ofType(ActionTypes.DELETE_INVOICE_ITEM),
  switchMap((action: any) =>
    sendRequestObservable(
      'delete',
      `/api/invoices/${action.payload.invoicesId}/items/${action.payload.id}`,
    ).pipe(
      map((response) => deleteInvoicesItemFulfilled(response)),
    ),
  ),
);
