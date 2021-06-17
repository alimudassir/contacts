import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a Contact</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((currentContact) => (
            <ContactItem key={currentContact.id} contact={currentContact} />
          ))
        : contacts.map((currentContact) => (
            <ContactItem key={currentContact.id} contact={currentContact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
