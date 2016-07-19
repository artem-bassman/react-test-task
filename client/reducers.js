/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import home from './modules/Home/HomeReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  home,
  intl,
});
