import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from './contactsSlice';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);

  const handleEdit = () => {
    if (editing) {
      dispatch(editContact({ id: contact.id, updatedContact: { name, phoneNumber } }));
    }
    setEditing(!editing);
  };

  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{contact.name}</h2>
          <p>{contact.phoneNumber}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ContactItem;
