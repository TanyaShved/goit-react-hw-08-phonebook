import React, { useState } from 'react';
import Pnonebook from 'components/Phonebook/Phonebook';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Modal from 'components/Modal/Modal';
import { Button } from '@material-ui/core';


const divStyles = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  marginBottom: 20,
};

const appBar = {
  paddingLeft: '10px',
  paddingRight: '10px',
  display: 'flex',
  justifyContent: 'space-between',
}

export default function ContactsViews(params) {
  const [showModal, setShowModal] = useState(false);

   const toggleModal = () => {
    setShowModal(showModal => !showModal);
   }
  
  return (
      <>
      <div style={divStyles}>
        <div style={appBar}>
          <h1 style={{marginRight: '20px'}}>My Contacts</h1>
          <div style={{marginTop: '20px'}}>
            <Button onClick={toggleModal} aria-label="Open Modal" variant="contained" color="secondary">Add contact</Button>
          </div>
        </div>
        {showModal && (
          <Modal onClose={toggleModal}>
            <Pnonebook toggleModal={toggleModal}/>
          </Modal>)}
        
        <Contacts>
          <Filter
            title="Find contacts by name"
          />
          <ContactsList/>
              </Contacts> 
              </div>
    </>
  );
}