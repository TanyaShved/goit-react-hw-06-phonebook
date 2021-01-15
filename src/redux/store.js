import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import contactsRedux from './contacts/contacts-redux';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
  contacts: persistReducer(contactsPersistConfig,contactsRedux),
},
   middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };




// c использованием библиотек redux и  react-redux

// import { createStore } from 'redux';
// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsRedux from './contacts/contacts-redux';

// const rootReducer = combineReducers({
//   contacts: contactsRedux,
// })

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;