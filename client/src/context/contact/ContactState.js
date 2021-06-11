import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER
} from '../types';


const ContactState = props => {
  const initialState = {
    contacts : [
      {
        id : 1,
        name : "Mudassir Ali",
        email : "ali@gmail.com",
        phone : "+1-9800101101",
        type : "Professional"
      },
      {
        id : 2,
        name : "Abdul Malik",
        email : "malik@gmail.com",
        phone : "+91-9709101101",
        type : "Personal"
      },
      {
        id : 3,
        name : "Tom Cruise",
        email : "tom@gmail.com",
        phone : "+971-890098788",
        type : "Professional"
      }

    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact
  
  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value = {{
        contacts : state.contacts
      }}>
      { props.children }
    </ContactContext.Provider>
  );
};

export default ContactState;