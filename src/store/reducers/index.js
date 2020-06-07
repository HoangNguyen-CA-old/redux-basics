import { combineReducers } from 'redux';
import counterReducer from './counter';
import historyReducer from './history';

const rootReducer = combineReducers({
  counter: counterReducer,
  history: historyReducer,
});

export default rootReducer;
