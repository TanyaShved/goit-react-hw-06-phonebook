import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';
import { connect } from 'react-redux';
import { ReactComponent as DeleteIcon } from '../../icon/delete.svg';
import contactsActions from '../../redux/contacts/contacts-actions';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contact}>
          {name}: {number}
          <IconButton
            onClick={() => onDeleteContact(id)}
            aria-label="Delete contact"
          >
            <DeleteIcon width="30" height="30" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

ContactsList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getFilteredContact = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

const mapStateToProps = ({ contacts: {items, filter} }) => ({
    contacts: getFilteredContact(items, filter),
});

const mapDispatchToProps = dispatch => ({
onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
