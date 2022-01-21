import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { GreetingPage, ChatPage } from 'pages';
import { getUserName } from 'store/reducers/user/service';
import { getUserId } from 'services/getUserId';
import Spinner from 'components/shared/Spinner';

// lazy components
const NotFoundPage = React.lazy(() => import('pages/NotFoundPage'));
const ContentPage = React.lazy(() => import('pages/ContentPage'));

const lazyComponent = (Component) => {
  return (props) => (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  );
};

function App() {
  const id = getUserId();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserName(id));
  }, []);

  const name = useSelector(({ user }) => user.name);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (name ? <ChatPage {...props} /> : <Redirect to="/greeting" />)}
      />
      <Route
        exact
        path="/greeting"
        render={(props) => (name ? <Redirect to="/" /> : <GreetingPage {...props} />)}
      />
      <Route path="/content" render={lazyComponent(ContentPage)} />
      <Route path="*" render={lazyComponent(NotFoundPage)} />
    </Switch>
  );
}

export default withRouter(App);
