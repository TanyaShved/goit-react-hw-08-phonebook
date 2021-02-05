import { useEffect } from 'react';
import IconButton from '../IconButton/IconButton';
import { useSelector, useDispatch} from 'react-redux';
import { ReactComponent as DeleteIcon } from 'icon/delete.svg';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Spinner from 'components/Spinner/Spinner';
import s from './ContactsList.module.css';


const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getFilteredContact);
  const loading = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getError);
  const dispatch = useDispatch();
  
useEffect(() =>
    dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
  <>
    {
      contacts.length > 0 && (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.contact}>
              {name}: {number}
              <IconButton
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
                aria-label="Delete contact"
              >
                <DeleteIcon width="20" height="20" />
              </IconButton>
            </li>
          ))}
        </ul>
      )
      }

      {loading && (
        <Spinner />
      )}
      <div>
        {error && <h1>{error.message}</h1>}
      </div>
      
      </>
  );
};

export default ContactsList;



