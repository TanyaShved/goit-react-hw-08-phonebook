import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {changeFilter} from 'redux/contacts/contacts-actions';
import { contactsSelectors } from 'redux/contacts';
import TextField from '@material-ui/core/TextField';

const Filter = ({ title }) => {
  const value = useSelector(contactsSelectors.getValue);
  const dispatch = useDispatch();

  return (
    <div style={{marginBottom: "20px"}}>
      <TextField
      id="email"
          label={title}
          value={value}
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
          variant="outlined"
        color="secondary"
      size='small'/>
    </div>
  );
};

Filter.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Filter;



