import { createStore, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import reducers from './reducers/index';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
