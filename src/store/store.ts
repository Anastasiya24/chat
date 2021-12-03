import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import { user, messages } from './reducers';
import history from './history';

const store = configureStore({
  reducer: {
    router: connectRouter(history),
    user,
    messages,
  },
  middleware: [routerMiddleware(history), thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
