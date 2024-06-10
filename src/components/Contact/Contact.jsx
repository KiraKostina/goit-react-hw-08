import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.container}>
      <div className={css.info_container}>
        <span className={css.contact_line}>
          <FaUser />
          <p>{contact.name}</p>
        </span>
        <span className={css.contact_line}>
          <FaPhoneAlt />
          <p>{contact.number}</p>
        </span>
      </div>
      <button className={css.deleteCntBtn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
