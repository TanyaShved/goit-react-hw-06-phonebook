import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {  useSelector, useDispatch  } from 'react-redux';
import { useState } from 'react';
import contactsActions from '../../redux/contacts/contacts-actions';
import {getContacts} from '../../redux/contacts/contacts-selectors';
import s from './Phonebook.module.css';

const Phonebook = ({ title }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handeleSubmit = e => {
    e.preventDefault();

    if (checkContactName()) {
      return;
    }
     
    if (name === '' || number === '') {
    return alert('Please fill in the required fields!');
    }

    dispatch(contactsActions.addContact(name, number));
    setName('');
    setNumber('');
  };

  const checkContactName = () => {
    const namesInPhonebook = contacts.find(contact => contact.name === name);

    if (namesInPhonebook) {
      alert(`${name} is already in contacts!`);
      return true;
    }
  };

  return (
      <div>
        <h2 className={s.title}>{title}</h2>
        <form onSubmit={handeleSubmit} className={s.container}>
          <label className={s.textInput}>
            Name
            <input
              type="text"
              value={name}
              name="name"
              placeholder="Rosie Simpson"
              onChange={e => setName(e.currentTarget.value)}
              className={s.formInput}
            />
          </label>
          <label className={s.textInput}>
            Number
            <PhoneInput
              country={'ua'}
              value={number}
              name="number"
              placeholder="4591256"
              onChange={setNumber}
              className={s.formInput_phone}
            />
          </label>
          <button type="submit" className={s.addButton}>
            Add contact
          </button>
        </form>
      </div>
    );
}

Phonebook.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Phonebook;




// СТАРАЯ ВВЕРСИЯ

// import PropTypes from 'prop-types';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import { connect } from 'react-redux';
// import { useState } from 'react';
// import contactsActions from '../../redux/contacts/contacts-actions';
// import s from './Phonebook.module.css';

// const Phonebook = ({ onSubmit, contacts, title }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
  
//   const handeleSubmit = e => {
//     e.preventDefault();

//     if (checkContactName()) {
//       return;
//     }
     
//     if (name === '' || number === '') {
//     onSubmit(name, number);
//     setName('');
//     setNumber('');
//     }

//     alert('Please fill in the required fields!');
    
//   };

//   const checkContactName = () => {
//     const namesInPhonebook = contacts.find(contact => contact.name === name);

//     if (namesInPhonebook) {
//       alert(`${name} is already in contacts!`);
//       return true;
//     }
//   };

//   return (
//       <div>
//         <h2 className={s.title}>{title}</h2>
//         <form onSubmit={handeleSubmit} className={s.container}>
//           <label className={s.textInput}>
//             Name
//             <input
//               type="text"
//               value={name}
//               name="name"
//               placeholder="Rosie Simpson"
//               onChange={e => setName(e.currentTarget.value)}
//               className={s.formInput}
//             />
//           </label>
//           <label className={s.textInput}>
//             Number
//             <PhoneInput
//               country={'ua'}
//               value={number}
//               name="number"
//               placeholder="4591256"
//               onChange={setNumber}
//               className={s.formInput_phone}
//             />
//           </label>
//           <button type="submit" className={s.addButton}>
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
// }

// Phonebook.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   title: PropTypes.string.isRequired,
//   contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       }),
//     ),
// };

// const mapStateToProps = state => ({
//   contacts: state.contacts.items
// });

// const mapDispatchToProps = dispatch => ({
// onSubmit: (name, number) => dispatch(contactsActions.addContact(name, number)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
