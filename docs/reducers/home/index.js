import { combineReducers } from 'redux';
import * as homeDocReducers from './homeDoc';

// The final reducers for workspace list.
const finalReducers = combineReducers({
  ...homeDocReducers
});

export default finalReducers;
