import { combineReducers } from 'redux';

import contacts from './contacs';

const appReducer = combineReducers({
  contacts
});

export default appReducer;