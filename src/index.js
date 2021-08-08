import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import allRedux from '../reducers/index';
import { createStore, combineReducers } from 'redux';

const store = createStore(allRedux);

ReactDOM.render(
  <App />,

  document.getElementById('root')
);
