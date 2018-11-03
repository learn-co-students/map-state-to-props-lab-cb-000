import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import manageUsers from './reducers/manageUsers'

import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(manageUsers, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));


// add imports and code
// const store = createStore(manageUsers)

ReactDOM.render(
  // add imports and code
  <Provider store={store}>
  <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
