import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css'
import {  useSelector, useDispatch  } from 'react-redux';
import { useState } from 'react';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
       width: '25ch',
       display: 'flex',
       flexDirection: 'column',
       marginBottom: 15,
    },
  },
}));

const Phonebook = ({toggleModal}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
   const classes = useStyles();
  
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handeleSubmit = e => {
    e.preventDefault();

    if (checkContactName()) {
      return;
    }
     
    if (name === '' || number === '') {
    return alert('Please fill in the required fields!');
    }

    dispatch(contactsOperations.addContact({name, number}));
    setName('');
    setNumber('');
    toggleModal();
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
        <form onSubmit={handeleSubmit} className={classes.root}>
<div style={{marginBottom: "20px", color: 'red'}}>
        <TextField
          id="name"
          label="name"
          value={name}
          name="email"
          onChange={e => setName(e.currentTarget.value)}
          variant="outlined"
          color="secondary"
        /> 
         <PhoneInput
              country={'ua'}
              value={number}
              name="number"
              placeholder="4591256"
          onChange={setNumber}
          />
          </div>

        <Button type="submit" variant="contained" color="secondary">Add contact</Button>
        </form>
      </div>
    );
}

Phonebook.protoTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Phonebook;


