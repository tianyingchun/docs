import * as DocActionTypes from '../constants/DocActionTypes';
import DocService from '../services/Doc';

let docService = new DocService();

let docDetailDto = (doc) => {
  // May be we can do some data transfer here.
  // ...
  return {
    type: DocActionTypes.SHOW_DOC_DETAIL,
    payload: doc
  }
};

let docCatalogsDto = (docCatalogs) => {
  // May be we can do some data transfer here.
  // ...
  return {
    type: DocActionTypes.LOAD_DOC_CATALOGS,
    payload: docCatalogs
  }
};

// thunkMiddleware
export function loadDocCatalogs(routerParams) {
  console.log('action.loadDocCatalogs router params: ', routerParams)
  return (dispatch, getState) => {
    return docService.loadDocCatalogs(routerParams)
      .then(function (result) {
        dispatch(docCatalogsDto(result));
      });
  };
};
//promiseMiddleware, can be attached to component.needs for server async rendering also.
export function searchDocs(routerParams) {
  console.log('action.searchDocs router params: ', routerParams)
  return {
    type: DocActionTypes.LOAD_DOC_CATALOGS,
    payload: {
      promise: docService.searchDocs(routerParams)
    }
  }
};
// promiseMiddleware.
export function loadDocDetail(routerParams) {
  console.log('action.loadDocDetail router params: ', routerParams)
  return {
    type: DocActionTypes.SHOW_DOC_DETAIL,
    payload: {
      promise: docService.loadDocDetail(routerParams)
    }
  }
};
