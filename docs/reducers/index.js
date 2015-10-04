import { combineReducers } from 'redux';
import homeDocsReducer from './home';
import lessDocsReducer from './less';
import reactDocsReducer from './react';
import MobileDocsReducer from './mobile';

export default function findReducers(moduleName) {
  if (!moduleName) {
    throw new Error('we must specific `moduleName` to construct corresponding final reducers');
  }
  switch (moduleName) {
    case 'home':
      return homeDocsReducer;
    case 'less':
      return lessDocsReducer;
    case 'react':
      return reactDocsReducer;
    case 'mobile':
      return MobileDocsReducer;

    default:
      throw new Error(`can not find '${moduleName}' final reducers`);
  }
}
