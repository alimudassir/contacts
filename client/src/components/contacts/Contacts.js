import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((currentContact) => (
            <CSSTransition
                key={currentContact._id}
                timeout={500}
                classNames="item"
            >
              <ContactItem contact={currentContact} />
            </CSSTransition>
            ))
          : contacts.map((currentContact) => (
              <CSSTransition
                key={currentContact._id}
                timeout={500}
                classNames="item"
              >
                <ContactItem contact={currentContact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
