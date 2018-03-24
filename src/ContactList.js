import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

const ContactList = ({contacts, handleToggleContact, handleDeleteContact}) => <ul>
  {contacts.map((contact) => <Contact
    key={contact.id}
    {...contact}
    handleToggleContact={handleToggleContact}
    handleDeleteContact={handleDeleteContact}
  />)}
</ul>;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    done: PropTypes.bool,
  })),
  handleToggleContact: PropTypes.func.isRequired,
  handleDeleteContact: PropTypes.func.isRequired
};

export default ContactList;