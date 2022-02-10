import React, { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { getUserName } from 'store/reducers/user/service';
import { getUserName as getUserNameSelector } from 'store/reducers/user/selectors';
import { getUserId } from 'services/getUserId';
import Spinner from 'components/shared/Spinner';

const GreetingPage = lazy(() => import('pages/GreetingPage'));
const ChatPage = lazy(() => import('pages/ChatPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  const id = getUserId();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserName(id));
  }, []);

  const name = useSelector(getUserNameSelector);

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) =>
            name ? <ChatPage {...props} /> : <Redirect to="/greeting" />
          }
        />
        <Route
          exact
          path="/greeting"
          render={(props) => (name ? <Redirect to="/" /> : <GreetingPage {...props} />)}
        />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
