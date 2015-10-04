import * as DocActionTypes from '../../constants/DocActionTypes';
import { resolve, reject } from 'redux-simple-promise';

let initialState = {
  isLoading: false,
  data: {}
};

export function mobileTest(state = initialState, action) {
  return state;
};
