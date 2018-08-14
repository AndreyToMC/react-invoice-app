import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware, push } from 'react-router-redux';
import mainReducer from '../reducers/mainReducer';
import history from './history'


export const store = createStore(mainReducer, composeWithDevTools(
  applyMiddleware(thunk, promiseMiddleware(), routerMiddleware(history)),
));

// export const history = syncHistoryWithStore(createBrowserHistory(), store);
