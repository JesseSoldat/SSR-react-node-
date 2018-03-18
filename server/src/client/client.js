import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Home from './components/Home';


const store = createStore(
  reducers,
  {}
);


ReactDOM.hydrate(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.querySelector('#root')
);