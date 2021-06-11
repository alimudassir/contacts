import React, {Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';


const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const contacts = contactContext.contacts;
  const firstContact = contacts[0];
  const secondContact = contacts[1];
  const thirdContact = contacts[2];
  
  return (
    <Fragment>
      {
        contacts.map(currentContact => (
          <ContactItem key={currentContact.id} contact={currentContact} />
        ))
      }
    </Fragment>
  )
}

export default Contacts;

/*{contacts.forEach(contact => {
  <ContactItem key={contact.id} contact={contact} />
})}

<ContactItem key={firstContact.id} contact={firstContact} />
      <ContactItem key={secondContact.id} contact={secondContact} />
      <ContactItem key={thirdContact.id} contact={thirdContact} />*/
