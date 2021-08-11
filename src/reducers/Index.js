import { CounterReducer } from './Counter';
import { LoggedReducers } from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: CounterReducer,
  isLogged: LoggedReducers
});

export default { allReducers };
