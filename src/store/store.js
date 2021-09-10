import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import { user, messages } from './reducers';
import history from './history';

export default configureStore({
  reducer: {
    router: connectRouter(history),
    user,
    messages,
  },
  middleware: [routerMiddleware(history), thunk],
});
