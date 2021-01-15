import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', (name, number) => ({
    payload: {
        id: uuidv4(),
        name,
        number,
    }
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

const contactsActions = { addContact, deleteContact, changeFilter };

export default contactsActions;





// c использованием библиотек redux и  react-redux

// import { v4 as uuidv4 } from 'uuid';
// import types from './contacts-types';

// const addContact = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//     }
// });

// const deleteContact = contactId => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// })

// const contsctsActions = { addContact, deleteContact, changeFilter };


// export default contactsActions;