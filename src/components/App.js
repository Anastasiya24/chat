import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import ChatWithCompanionPage from 'pages/ChatWithCompanionPage';
import ChatWithMePage from 'pages/ChatWithMePage';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import { loadUser } from 'store/reducers/user';

function App() {
  const name = useSelector(({ user }) => user.name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        exact
        path="/chat-with-me"
        render={(props) => (name ? <ChatWithMePage {...props} /> : <Redirect to="/" />)}
      />
      <Route
        exact
        path="/chat-with-companion"
        render={(props) =>
          name ? <ChatWithCompanionPage {...props} /> : <Redirect to="/" />
        }
      />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
