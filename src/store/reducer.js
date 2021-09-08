import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './history';
import messages from './messages/reducer';

const reducers = {
  router: connectRouter(history),
  messages,
};

export default combineReducers(reducers);
