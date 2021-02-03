import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {changeFilter} from 'redux/contacts/contacts-actions';
import { contactsSelectors } from 'redux/contacts';
import s from './Filter.module.css';

const Filter = ({ title }) => {
  const value = useSelector(contactsSelectors.getValue);
  const dispatch = useDispatch();

  return (
    <div>
      <label className={s.textInput}>
        {title}
        <input
          type="text"
          value={value}
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
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



