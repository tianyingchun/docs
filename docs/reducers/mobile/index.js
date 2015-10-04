import { combineReducers } from 'redux';
import * as mobileDocReducers from './mobileDoc';

// The final reducers for workspace list.
const finalReducers = combineReducers({
  ...mobileDocReducers
});

export default finalReducers;
