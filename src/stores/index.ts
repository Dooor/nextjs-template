// see: https://github.com/zeit/next.js/blob/canary/examples/with-redux-wrapper/store.js

// Library
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Middleware
import logger from 'redux-logger';
let middleware = applyMiddleware(logger);

if (process.env.NODE_ENV !== 'production') {
  middleware = composeWithDevTools(middleware);
}

// Reducers
import reducer from '../reducers';

export const initStore = (initialState: any) => {
  return createStore(reducer, initialState, middleware);
};
