import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, combineReducers } from 'redux';
const store = createStore();

ReactDOM.render(
  <App />,

  document.getElementById('root')
);
