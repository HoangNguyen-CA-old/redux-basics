import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';

import reducer from './store/reducers/index';

//middleware
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[Middleware] action', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());

      return result;
    };
  };
};

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
