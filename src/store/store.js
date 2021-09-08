import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
// import thunk from 'redux-thunk';
import reducers from './reducer';
import history from './history';

const initialState = {};

const middleware = [
  routerMiddleware(history),
  // thunk
];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export default createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
