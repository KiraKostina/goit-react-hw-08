import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useState } from 'react';
import EditForm from '../EditForm/EditForm';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const [isEditing, setIsEditing] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const handleEdit = contact => {
    setCurrentContact(contact);
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
    setCurrentContact(null);
  };

  return (
    <>
      {isEditing && <EditForm contact={currentContact} onClose={handleClose} />}
      <ul className={css.contact_list}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} onEdit={handleEdit} />
          </li>
        ))}
      </ul>
    </>
  );
}
