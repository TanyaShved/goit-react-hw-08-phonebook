import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const Contacts = ({ title, children }) => {

  return (
    <>
      <h2 className={s.title}>{title}</h2>
      {children}
    </>
  );
};

Contacts.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Contacts;
