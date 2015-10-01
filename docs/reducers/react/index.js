import { combineReducers } from 'redux';
import * as reactDocReducers from './reactDoc';

// The final reducers for workspace list.
const finalReducers = combineReducers({
  ...reactDocReducers
});

export default finalReducers;
