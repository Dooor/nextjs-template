// see: https://github.com/zeit/next.js/blob/canary/examples/with-redux-wrapper/store.js

// Library
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Middleware
import logger from 'redux-logger';
const middleware = applyMiddleware(logger);

// Reducers
import reducer from '../reducers';

export const initStore = (initialState) => {
  return createStore(reducer, initialState, composeWithDevTools(middleware));
};
