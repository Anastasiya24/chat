import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';

import store from 'store/store';
import history from 'store/history';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
// require('dotenv').config()

const RootApp = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<RootApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
