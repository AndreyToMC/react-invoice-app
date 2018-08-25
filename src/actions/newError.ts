import {store} from '../redux/store';

import {Subject} from 'rxjs/index'

export const subject = new Subject();

export function errorAction(error) {
  subject.next('error')
  return store.dispatch({
    type: 'ERROR',
    payload: error,
  })
}
