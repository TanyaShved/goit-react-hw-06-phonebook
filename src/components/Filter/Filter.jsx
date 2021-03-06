import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getValue } from '../../redux/contacts/contacts-selectors';
import s from './Filter.module.css';

const Filter = ({ title }) => {
  const value = useSelector(getValue);
  const dispatch = useDispatch();

  return (
    <div>
      <label className={s.textInput}>
        {title}
        <input
          type="text"
          value={value}
          onChange={e => dispatch(contactsActions.changeFilter(e.currentTarget.value))}
          className={s.formInput}
        />
      </label>
    </div>
  );
};

Filter.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Filter;



// СТАРАЯ ВВЕРСИЯ

// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import contactsActions from '../../redux/contacts/contacts-actions';
// import s from './Filter.module.css';

// const Filter = ({ title, value, onChange }) => {
//   return (
//     <div>
//       <label className={s.textInput}>
//         {title}
//         <input
//           type="text"
//           value={value}
//           onChange={onChange}
//           className={s.formInput}
//         />
//       </label>
//     </div>
//   );
// };

// Filter.protoTypes = {
//   title: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.string.isRequired,
// };

// const mapStateToProps = state => ({
//   value: state.contacts.filter
// });

// const mapDispatchToProps = dispatch => ({
// onChange: (e) => dispatch(contactsActions.changeFilter(e.currentTarget.value)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
