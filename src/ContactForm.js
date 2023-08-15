import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './contactsSlice';
import './style.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),
      name,
      phoneNumber,
    };
    dispatch(addContact(newContact));
    setName('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
