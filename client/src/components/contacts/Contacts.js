import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";
import Spinner from "../layout/spinner";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a Contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
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
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
