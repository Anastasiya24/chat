import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import ChatPage from 'pages/ChatPage';
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
        path="/chat"
        render={(props) => (name ? <ChatPage {...props} /> : <Redirect to="/" />)}
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
