import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const contacts = contactContext.contacts;

  return (
    <Fragment>
      {contacts.map((currentContact) => (
        <ContactItem key={currentContact.id} contact={currentContact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
