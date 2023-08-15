import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './contactsSlice';
import ContactItem from './ContactItem';
import './style.css';



const ContactList = () => {
  const contacts = useSelector(state => state);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {contacts.map(contact => (
        <div key={contact.id}>
          <ContactItem contact={contact} />
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
