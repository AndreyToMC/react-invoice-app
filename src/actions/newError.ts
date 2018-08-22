import {store} from '../services/store';

export function errorAction(error) {
  return store.dispatch({
    type: 'ERROR',
    payload: error,
  })
}
