import { CounterReducer } from './Counter';
import { LoggedReducers } from './isLogged';
import { combineReducers } from 'redux';

const allRedux = combineReducers({
  counter: CounterReducer,
  isLogged: LoggedReducers
});

export default allRedux;
