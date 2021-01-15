import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contsctsActions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = ({ title, value, onChange }) => {
  return (
    <div>
      <label className={s.textInput}>
        {title}
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={s.formInput}
        />
      </label>
    </div>
  );
};

Filter.protoTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter
});

const mapDispatchToProps = dispatch => ({
onChange: (e) => dispatch(contsctsActions.changeFilter(e.currentTarget.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
