import { errorAction } from '../actions/newError';

import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {pipe, map, catchError, tap} from 'rxjs/operators'

import { push } from 'react-router-redux';
import { apiURL } from '../services/apiURL';

export function sendRequestObservable(method: string, url: string, data?: any) {
  return ajax({
    url: apiURL + url,
    method: method,
    body: data,
  }).pipe(
    map(e => e.response),
    catchError(error => errorAction(error.message))
  )
}
