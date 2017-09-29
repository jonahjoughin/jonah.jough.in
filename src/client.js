import logger from 'redux-logger'
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import { recordTransit } from './records'

import App from './app.js';

const preloadedState = recordTransit.fromJSON(window.__PRELOADED_STATE__)
console.log("Preloaded State",preloadedState)
delete window.__PRELOADED_STATE__
const store = createStore(rootReducer, preloadedState, applyMiddleware(logger))
render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
