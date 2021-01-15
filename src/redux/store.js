import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsRedux from './contacts/contacts-redux';

const rootReducer = combineReducers({
  contacts: contactsRedux,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;