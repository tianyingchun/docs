import { combineReducers } from 'redux';
import * as lessDocReducers from './lessDoc';

// The final reducers for workspace list.
const finalReducers = combineReducers({
  ...lessDocReducers
});

export default finalReducers;
