
import { sendRequestObservable } from '../../../services/requestObservable'

import { ofType } from 'redux-observable'
import { map, mergeMap, pairwise, pluck, switchMap, take, tap } from 'rxjs/operators'

import {
  ActionTypes,
  changeInvoiceFulfilled,
  deleteInvoiceFulfilled,
  getInvoiceByIdFulfilled,
  getInvoicesFulfilled,
  sendInvoicesFulfilled,
} from '../actions'

import { addInvoicesItems } from '../../invoiceItems/actions'

export const getInvoicesEpic = (action$) => action$.pipe(
  ofType(ActionTypes.GET_INVOICES),
  switchMap((action: any) =>
    sendRequestObservable('get', '/api/invoices').pipe(
      map((response) => getInvoicesFulfilled(response)),
    ),
  ),
);

export const getInvoiceByIdEpic = (action$) => action$.pipe(
  ofType(ActionTypes.GET_INVOICE_BY_ID),
  switchMap((action: any) =>
    sendRequestObservable('get', `/api/invoices/${action.payload.invoicesId}`).pipe(
      map((response) => getInvoiceByIdFulfilled(response)),
    ),
  ),
);

export const sendInvoicesEpic = (action$) => action$.pipe(
  ofType(ActionTypes.SEND_INVOICES),
  tap(console.log),
  mergeMap((action: any) =>
    sendRequestObservable('post', '/api/invoices', { ...action.payload.invoiceData }).pipe(
      map((response) => sendInvoicesFulfilled(response)),
      map(({payload}) => {
        const invoiceId = payload.id
        const itemsArr = action.payload.itemsArr
        console.log(invoiceId, itemsArr)
      }),
    ),
  ),
);

export const changeInvoiceEpic = (action$) => action$.pipe(
  ofType(ActionTypes.CHANGE_INVOICE),
  switchMap((action: any) =>
    sendRequestObservable('put', `/api/invoices/${action.payload.id}`, {...action.payload.invoiceData}).pipe(
      map((response) => changeInvoiceFulfilled(response)),
    ),
  ),
);

export const deleteInvoiceEpic = (action$) => action$.pipe(
  ofType(ActionTypes.DELETE_INVOICE),
  switchMap((action: any) =>
    sendRequestObservable('delete', `/api/invoices/${action.payload.id}`).pipe(
      map((response) => deleteInvoiceFulfilled(response)),
    ),
  ),
);
