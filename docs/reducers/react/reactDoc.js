import * as DocActionTypes from '../../constants/DocActionTypes';
import { resolve, reject } from 'redux-simple-promise';

let initialState = {
  isLoading: false,
  data: null
};

export function docDetails(state = initialState, action) {
  switch (action.type) {
    case DocActionTypes.SHOW_DOC_DETAIL:
      return Object.assign({}, initialState, {
        isLoading: true
      });

    case resolve(DocActionTypes.SHOW_DOC_DETAIL):
    case reject(DocActionTypes.SHOW_DOC_DETAIL):
      return Object.assign({}, initialState, {
        isLoading: false,
        data: action.payload
      });

    default:
      return state;
  }
};

let initialDocMenuState = {
  isLoading: true,
  data: []
};

export function docMenu(state = initialDocMenuState, action) {
  switch (action.type) {
    // loaded doc catalog for react.
    case DocActionTypes.LOAD_DOC_CATALOGS:
      return Object.assign({}, initialDocMenuState, {
        isLoading: false,
        data: action.payload
      });
    case resolve(DocActionTypes.SHOW_DOC_DETAIL):
    case reject(DocActionTypes.SHOW_DOC_DETAIL):
      return Object.assign({}, initialDocMenuState, {
        isLoading: false,
        data: action.payload
      });

    default:
      return state;
  }
};


let searchResultState = {
  isLoading: false,
  data: []
};

export function docSearchResult(state = searchResultState, action) {
  switch (action.type) {
    case DocActionTypes.SEARCH_DOCS:
      return object.assign({}, searchResultState, action.payload);

    default:
      return state;
  }
};
