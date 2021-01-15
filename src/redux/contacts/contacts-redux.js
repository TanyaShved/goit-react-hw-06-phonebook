import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';


const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = createReducer(initialContacts, {
    [contactsActions.addContact]: (state, { payload }) => [...state, payload],
    [contactsActions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
    [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
})





// c использованием библиотек redux и  react-redux

// import { combineReducers } from 'redux';
// import types from './contacts-types';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const itemsReducer = (state = initialContacts, { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];
        
//         case types.DELETE:
//             return state.filter(({ id }) => id !== payload)
        
//         default:
//             return state;
//     }
    
// };

// const filterReducer = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;
        
//         default:
//             return state;
//     }
// };

// export default combineReducers({
//     items: itemsReducer,
//     filter: filterReducer,
// })