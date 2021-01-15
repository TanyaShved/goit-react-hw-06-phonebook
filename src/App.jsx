import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Pnonebook from './components/Phonebook/Phonebook';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactsList/ContactsList';

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts});
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
      <>
        <Pnonebook
          title="Pnonebook"
        />
        <Contacts title="Contacts">
          <Filter
            title="Find contacts by name"
          />
          <ContactsList/>
        </Contacts> 
      </>
    );
}

export default connect()(App);
