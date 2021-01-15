import { v4 as uuidv4 } from 'uuid';
import types from './contacts-types';

const addContact = (name, number) => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        name,
        number,
    }
});

const deleteContact = contactId => ({
    type: types.DELETE,
    payload: contactId,
});

const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value,
})

const contsctsActions = { addContact, deleteContact, changeFilter };


export default contsctsActions;