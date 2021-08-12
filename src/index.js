import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import allReducers from './reducers/Index';
import { createStore, combineReducers } from 'redux';

const store = createStore(allReducers);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
