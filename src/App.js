import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { GreetingPage, ChatPage, NotFoundPage } from 'pages';
import { loadUser } from 'store/reducers/user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
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
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default withRouter(App);
