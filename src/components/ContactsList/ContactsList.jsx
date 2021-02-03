import { useEffect } from 'react';
import IconButton from '../IconButton/IconButton';
import { useSelector, useDispatch} from 'react-redux';
import { ReactComponent as DeleteIcon } from 'icon/delete.svg';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
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
                <DeleteIcon width="30" height="30" />
              </IconButton>
            </li>
          ))}
        </ul>
      )
      }

     {loading && (<Loader
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />)}
      <div>
        {error && <h1>{error.message}</h1>}
      </div>
      
      </>
  );
};

export default ContactsList;



