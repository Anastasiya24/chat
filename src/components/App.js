import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import ChatWithCompanionPage from 'pages/ChatWithCompanionPage';
import ChatWithMePage from 'pages/ChatWithMePage';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';

function App() {
  // TODO get Name from storage
  const name = 'Nastya';

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
      {/* <Redirect from="/" to="/home" /> */}
    </Switch>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
