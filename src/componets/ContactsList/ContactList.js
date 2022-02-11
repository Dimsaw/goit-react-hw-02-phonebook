import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
        {name}: {number}
        <button
          className={s.btn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          <span className={s.btn__name}>delete</span>
        </button>
      </li>
    ))}
  </ul>
);

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
