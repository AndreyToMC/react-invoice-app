import { newErrorToStore } from '../redux/errors/actions';

import { ajax } from 'rxjs/ajax';
import {pipe, map, catchError} from 'rxjs/operators'

import { apiURL } from '../services/apiURL';

export function sendRequestObservable(method: string, url: string, data?: any) {
  return ajax({
    url: apiURL + url,
    method: method,
    body: data,
  }).pipe(
    map(e => e.response),
    catchError(error => newErrorToStore(error.message))
  )
}
