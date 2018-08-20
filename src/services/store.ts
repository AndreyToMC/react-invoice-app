
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import mainReducer from '../reducers/mainReducer';
import history from './history';

export const store = createStore(
  mainReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      promiseMiddleware(),
      routerMiddleware(history),
    ),
  ),
);
