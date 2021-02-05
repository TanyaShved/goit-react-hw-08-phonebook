import Pnonebook from 'components/Phonebook/Phonebook';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';


const divStyles = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  marginBottom: 20,
};

export default function ContactsViews(params) {
  return (
      <>
          <div style={divStyles}>
       <Pnonebook
          title="Pnonebook"
        />
        <Contacts title="Contacts">
          <Filter
            title="Find contacts by name"
          />
          <ContactsList/>
              </Contacts> 
              </div>
    </>
  );
}