import PropTypes from 'prop-types';

const Contacts = ({ children }) => {

  return (
    <>
      {children}
    </>
  );
};

Contacts.protoTypes = {
  children: PropTypes.node,
};

export default Contacts;
